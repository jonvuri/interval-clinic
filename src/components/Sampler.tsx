import React, {
  useContext,
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
} from 'react'

import { ActiveIntervals, Interval, IntervalContext } from '../intervals'
import { getToneStuff, ToneStuff } from '../synth'

import PlayPauseButton from './PlayPauseButton'

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
  interval: Interval | null
  samplerPlaying: boolean
  setInterval: (interval: Interval | null) => void
  setSamplerPlaying: (playing: boolean) => void
}

// Track the current playing epoch (to cancel right away if playing status updates)
let epoch = 0

const Sampler = ({
  activeIntervals,
  interval,
  samplerPlaying,
  setInterval,
  setSamplerPlaying,
}: Props) => {
  const intervals = useContext(IntervalContext)
  const previousPlaying = usePrevious(samplerPlaying)
  const [step, setStep] = useState(0)
  const [step1Active, setStep1Active] = useState(false)
  const [step2Active, setStep2Active] = useState(true)
  const [step3Active, setStep3Active] = useState(true)
  const [step4Active, setStep4Active] = useState(true)
  const [step5Active, setStep5Active] = useState(true)

  const handleToggleStep1 = () => {
    setStep1Active(!step1Active)
  }
  const handleToggleStep2 = () => {
    setStep2Active(!step2Active)
  }
  const handleToggleStep3 = () => {
    setStep3Active(!step3Active)
  }
  const handleToggleStep4 = () => {
    setStep4Active(!step4Active)
  }
  const handleToggleStep5 = () => {
    setStep5Active(!step5Active)
  }

  const revealed = (step1Active && step >= 1) || step >= 5

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

          if (currentEpoch === epoch && interval !== null) {
            setInterval(null)
            lastInterval = interval

            if (step1Active) {
              // Pre-reveal
              setStep(1)

              setInterval(interval)
              announceInterval(interval)

              await sleep(SAMPLE_REVEAL_DURATION)
              if (currentEpoch !== epoch) return
            }

            if (step2Active) {
              // Upwards
              setStep(2)

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
            }

            if (step3Active) {
              // Downwards
              setStep(3)

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
            }

            if (step4Active) {
              // Harmonic
              setStep(4)

              synth.triggerAttack(intervals['U'].frequency)
              // Avoid buzz?
              await sleep(1)
              synth.triggerAttack(intervals[interval].frequency)
              await sleep(TONE_PLAY_DURATION)
              synth.triggerRelease(intervals['U'].frequency)
              synth.triggerRelease(intervals[interval].frequency)
            }

            if (step5Active) {
              await sleep(SAMPLE_REVEAL_DURATION)

              if (currentEpoch !== epoch) return

              // Post-reveal
              setStep(5)

              setInterval(interval)
              announceInterval(interval)
            }

            setTimeout(() => {
              handlePlaySample(interval)
            }, SAMPLE_BUFFER_DURATION)
          }
        }
      }

      handlePlaySample(null)
    }
  }, [
    activeIntervals,
    intervals,
    samplerPlaying,
    setInterval,
    step1Active,
    step2Active,
    step3Active,
    step4Active,
    step5Active,
    previousPlaying,
  ])

  const handleTogglePlaying = async () => {
    if (!toneStuff) {
      toneStuff = await getToneStuff()
    }

    if (samplerPlaying) {
      setSamplerPlaying(false)
      setStep(0)
    } else {
      setSamplerPlaying(true)
    }
  }

  const handleKeypress = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleTogglePlaying()
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.steps}
        style={interval && revealed ? { color: intervals[interval].color } : {}}
      >
        <div
          className={
            step1Active
              ? step >= 1
                ? styles.activeStepIcon
                : styles.inactiveStepIcon
              : styles.disabledStepIcon
          }
        >
          ☄
        </div>
        <div
          className={
            step2Active
              ? step >= 2
                ? styles.activeStepIcon
                : styles.inactiveStepIcon
              : styles.disabledStepIcon
          }
        >
          🡥
        </div>
        <div
          className={
            step3Active
              ? step >= 3
                ? styles.activeStepIcon
                : styles.inactiveStepIcon
              : styles.disabledStepIcon
          }
        >
          🡦
        </div>
        <div
          className={
            step4Active
              ? step >= 4
                ? styles.activeStepIcon
                : styles.inactiveStepIcon
              : styles.disabledStepIcon
          }
        >
          ⚯
        </div>
        <div
          className={
            step5Active
              ? step >= 5
                ? styles.activeStepIcon
                : styles.inactiveStepIcon
              : styles.disabledStepIcon
          }
        >
          ☄
        </div>
      </div>
      <div className={styles.stepCheckboxes}>
        <div className={styles.stepCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={step1Active}
            onChange={handleToggleStep1}
          />
        </div>
        <div className={styles.stepCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={step2Active}
            onChange={handleToggleStep2}
          />
        </div>
        <div className={styles.stepCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={step3Active}
            onChange={handleToggleStep3}
          />
        </div>
        <div className={styles.stepCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={step4Active}
            onChange={handleToggleStep4}
          />
        </div>
        <div className={styles.stepCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={step5Active}
            onChange={handleToggleStep5}
          />
        </div>
      </div>
      <div
        className={
          samplerPlaying ? styles.playButtonPlaying : styles.playButton
        }
        role="button"
        tabIndex={0}
        onClick={handleTogglePlaying}
        onKeyPress={handleKeypress}
      >
        <PlayPauseButton playing={samplerPlaying} />
      </div>
    </div>
  )
}

export default Sampler
