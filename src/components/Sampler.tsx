import React, { useContext, useEffect, useRef } from 'react'

import { ActiveIntervals, Interval, IntervalContext } from '../intervals'
import { getToneStuff, ToneStuff } from '../synth'

import styles from './Sampler.module.css'

const usePrevious = <T extends unknown>(value: T): T | undefined => {
  const ref = useRef<T>()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

// Store val locally - super dirty. Trying to diagnose hold-forever issues
let toneStuff: ToneStuff | null = null

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// How long a sample tone plays
const TONE_PLAY_DURATION = 400

// How long before the next tone of the interval sample
const TONE_SPACE_DURATION = 200

// How long before the next interval in the current sample
const SAMPLE_REST_DURATION = 1000

// How long before revealing the current interval name
const SAMPLE_REVEAL_DURATION = 2000

// How long before the next sample set
const SAMPLE_BUFFER_DURATION = 4000

const getRandomIntervalFromActive = (
  activeIntervals: ActiveIntervals,
  exclude: Interval | null
): Interval | null => {
  const intervalValues = Object.entries(activeIntervals)
    .filter(([interval, active]) => active && interval !== exclude)
    .map(([interval]) => interval as Interval)

  if (intervalValues.length) {
    return intervalValues[Math.floor(Math.random() * intervalValues.length)]
  } else {
    return null
  }
}

type Props = {
  activeIntervals: ActiveIntervals
  samplerPlaying: boolean
  setInterval: (interval: Interval | null) => void
  setSamplerPlaying: (playing: boolean) => void
}

// Track the current playing epoch (to cancel right away if playing status updates)
let epoch = 0

const Sampler = ({
  activeIntervals,
  samplerPlaying,
  setInterval,
  setSamplerPlaying,
}: Props) => {
  const intervals = useContext(IntervalContext)
  const previousPlaying = usePrevious(samplerPlaying)

  useEffect(() => {
    if (samplerPlaying !== previousPlaying) {
      epoch += 1
    }

    if (samplerPlaying && !previousPlaying) {
      const currentEpoch = epoch
      const handlePlaySample = async (lastInterval: Interval | null) => {
        const numberOfActive = Object.values(activeIntervals).filter(
          (active) => active
        ).length

        if (numberOfActive > 0 && toneStuff) {
          const { synth, announceInterval } = toneStuff

          const interval = getRandomIntervalFromActive(
            activeIntervals,
            numberOfActive > 1 ? lastInterval : null
          )

          if (samplerPlaying && interval !== null) {
            setInterval(null)
            lastInterval = interval

            // Upwards
            synth.triggerAttack(intervals['U'].frequency)
            await sleep(TONE_PLAY_DURATION)
            synth.triggerRelease(intervals['U'].frequency)
            await sleep(TONE_SPACE_DURATION)
            if (currentEpoch !== epoch) return

            synth.triggerAttack(intervals[interval].frequency)
            await sleep(TONE_PLAY_DURATION)
            synth.triggerRelease(intervals[interval].frequency)

            await sleep(SAMPLE_REST_DURATION)
            if (currentEpoch !== epoch) return

            // Downwards
            synth.triggerAttack(intervals[interval].frequency)
            await sleep(TONE_PLAY_DURATION)
            synth.triggerRelease(intervals[interval].frequency)
            await sleep(TONE_SPACE_DURATION)
            if (currentEpoch !== epoch) return

            synth.triggerAttack(intervals['U'].frequency)
            await sleep(TONE_PLAY_DURATION)
            synth.triggerRelease(intervals['U'].frequency)

            await sleep(SAMPLE_REST_DURATION)
            if (currentEpoch !== epoch) return

            // Harmonic
            synth.triggerAttack(intervals['U'].frequency)
            // Avoid buzz?
            await sleep(1)
            synth.triggerAttack(intervals[interval].frequency)
            await sleep(TONE_PLAY_DURATION)
            synth.triggerRelease(intervals['U'].frequency)
            synth.triggerRelease(intervals[interval].frequency)
            await sleep(SAMPLE_REVEAL_DURATION)

            if (currentEpoch !== epoch) return

            setInterval(interval)
            announceInterval(interval)

            setTimeout(() => {
              handlePlaySample(interval)
            }, SAMPLE_BUFFER_DURATION)
          }
        }
      }

      handlePlaySample(null)
    }
  }, [activeIntervals, intervals, samplerPlaying, setInterval, previousPlaying])

  const handleStartSamples = async () => {
    if (!toneStuff) {
      toneStuff = await getToneStuff()
    }

    setSamplerPlaying(true)
  }

  const handleStopSamples = () => {
    setSamplerPlaying(false)
  }

  return (
    <div className={styles.container}>
      <button onClick={handleStartSamples}>Play</button>
      <button onClick={handleStopSamples}>Stop</button>
    </div>
  )
}

export default Sampler
