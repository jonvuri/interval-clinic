import React, { useState } from 'react'
import { PolySynth } from 'tone'

import styles from './App.module.css'

import IntervalLineDisplay from './components/IntervalLineDisplay'
import IntervalSineWaveDisplay from './components/IntervalSineWaveDisplay'
import IntervalStaffDisplay from './components/IntervalStaffDisplay'
import Piano from './components/Piano'

import intervals, { Interval } from './intervals'
import { getSynth } from './synth'

// Store val locally - super dirty. Trying to diagnose hold-forever issues
let synth: PolySynth | null = null

const App = () => {
  const [interval, setInterval] = useState<Interval | null>(null)

  const handleAttack = async (interval: Interval) => {
    if (synth) {
      synth.triggerAttack(intervals[interval].frequency)
      setInterval(interval)
    } else {
      synth = await getSynth()

      synth.triggerAttack(intervals[interval].frequency)
      setInterval(interval)
    }
  }

  const handleRelease = async (interval: Interval) => {
    if (synth) {
      // Send twice to try to fix issue where attack holds forever - seemingly due to double attack.
      // Hard to trigger.
      synth.triggerRelease(intervals[interval].frequency)
      synth.triggerRelease(intervals[interval].frequency)
    }
  }

  return (
    <div className={styles.app}>
      <IntervalSineWaveDisplay interval={interval} />
      <Piano onAttack={handleAttack} onRelease={handleRelease} />
      <IntervalLineDisplay interval={interval} />
      <IntervalStaffDisplay interval={interval} />
    </div>
  )
}

export default App
