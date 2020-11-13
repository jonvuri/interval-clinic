import React, { useState } from 'react'

import styles from './App.module.css'

import IntervalLineDisplay from './components/interval-displays/Line'
import IntervalNameDisplay from './components/interval-displays/Name'
import IntervalRatioDisplay from './components/interval-displays/Ratio'
import IntervalSineWaveDisplay from './components/interval-displays/SineWave'
import IntervalStaffDisplay from './components/interval-displays/Staff'
import Switch from './components/reference/Switch'
import Piano from './components/Piano'
import Sampler from './components/Sampler'
import TuningToggle from './components/TuningToggle'

import intervals, {
  ActiveIntervals,
  Interval,
  IntervalContext,
} from './intervals'
import { getToneStuff, ToneStuff } from './synth'

// Store val locally - super dirty. Trying to diagnose hold-forever issues
let toneStuff: ToneStuff | null = null

const defaultActiveIntervals: ActiveIntervals = {
  U: true,
  m2: true,
  M2: true,
  m3: true,
  M3: true,
  P4: true,
  A4: true,
  P5: true,
  m6: true,
  M6: true,
  m7: true,
  M7: true,
  O: true,
}

const App = () => {
  const [interval, setInterval] = useState<Interval | null>(null)
  const [just, setJust] = useState<boolean>(false)
  const [activeIntervals, setActiveIntervals] = useState<ActiveIntervals>(
    defaultActiveIntervals
  )
  const [samplerPlaying, setSamplerPlaying] = useState(false)

  const currentIntervals = just ? intervals.just : intervals.twelve

  const handleAttack = async (interval: Interval) => {
    if (!toneStuff) {
      toneStuff = await getToneStuff()
    }

    const { synth } = toneStuff

    synth.triggerAttack(currentIntervals[interval].frequency)
    setInterval(interval)
  }

  const handleRelease = async (interval: Interval) => {
    if (toneStuff) {
      const { synth } = toneStuff

      // Send twice to try to fix issue where attack holds forever - seemingly due to double attack.
      // Hard to trigger.
      synth.triggerRelease(currentIntervals[interval].frequency)
      synth.triggerRelease(currentIntervals[interval].frequency)
    }
  }

  const handleChangeJust = (just: boolean) => {
    if (toneStuff) {
      const { synth } = toneStuff

      synth.releaseAll()
    }

    setJust(just)
  }

  const onToggleInterval = (interval: Interval) => {
    setActiveIntervals({
      ...activeIntervals,
      [interval]: !activeIntervals[interval],
    })
  }

  return (
    <IntervalContext.Provider value={currentIntervals}>
      <div className={styles.app}>
        <div className={styles.wavePanel}>
          <IntervalSineWaveDisplay interval={interval} />
          <IntervalRatioDisplay interval={interval} just={just} />
        </div>
        <div className={styles.staffPanel}>
          <IntervalStaffDisplay interval={interval} />
          <IntervalNameDisplay interval={interval} />
        </div>
        <div className={styles.pianoPanel}>
          <Piano
            activeIntervals={activeIntervals}
            samplerPlaying={samplerPlaying}
            onAttack={handleAttack}
            onRelease={handleRelease}
            onToggleInterval={onToggleInterval}
          />
          <IntervalLineDisplay interval={interval} />
        </div>
        <div className={styles.detailsPanel}>
          <TuningToggle just={just} onChange={handleChangeJust} />
          <Sampler
            activeIntervals={activeIntervals}
            interval={interval}
            samplerPlaying={samplerPlaying}
            setInterval={setInterval}
            setSamplerPlaying={setSamplerPlaying}
          />
        </div>
        <div className={styles.referencePanel}>
          <Switch interval={interval} />
        </div>
      </div>
    </IntervalContext.Provider>
  )
}

export default App
