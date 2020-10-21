import React, { useState } from 'react'
import { PolySynth } from 'tone'

import styles from './App.module.css'

import IntervalLineDisplay from './components/IntervalLineDisplay'
import IntervalRatioDisplay from './components/IntervalRatioDisplay'
import IntervalSineWaveDisplay from './components/IntervalSineWaveDisplay'
import IntervalStaffDisplay from './components/IntervalStaffDisplay'
import Piano from './components/Piano'
import TuningToggle from './components/TuningToggle'

import intervals, { Interval, IntervalContext } from './intervals'
import { getSynth } from './synth'

// Store val locally - super dirty. Trying to diagnose hold-forever issues
let synth: PolySynth | null = null

const App = () => {
  const [interval, setInterval] = useState<Interval | null>(null)
  const [just, setJust] = useState<boolean>(false)

  const currentIntervals = just ? intervals.just : intervals.twelve

  const handleAttack = async (interval: Interval) => {
    if (synth) {
      console.log('attack', currentIntervals[interval].frequency)
      synth.triggerAttack(currentIntervals[interval].frequency)
      setInterval(interval)
    } else {
      synth = await getSynth()

      synth.triggerAttack(currentIntervals[interval].frequency)
      setInterval(interval)
    }
  }

  const handleRelease = async (interval: Interval) => {
    if (synth) {
      // Send twice to try to fix issue where attack holds forever - seemingly due to double attack.
      // Hard to trigger.
      synth.triggerRelease(currentIntervals[interval].frequency)
      synth.triggerRelease(currentIntervals[interval].frequency)
    }
  }

  const handleChangeJust = (just: boolean) => {
    if (synth) {
      synth.releaseAll()
    }

    setJust(just)
  }

  return (
    <IntervalContext.Provider value={currentIntervals}>
      <div className={styles.app}>
        <IntervalSineWaveDisplay interval={interval} />
        <IntervalRatioDisplay interval={interval} />
        <Piano onAttack={handleAttack} onRelease={handleRelease} />
        <IntervalLineDisplay interval={interval} />
        <TuningToggle just={just} onChange={handleChangeJust} />
        <IntervalStaffDisplay interval={interval} />
      </div>
    </IntervalContext.Provider>
  )
}

export default App
