import React, { useState } from 'react'

import styles from './App.module.css'

import IntervalLineDisplay from './components/IntervalLineDisplay'
import IntervalSineWaveDisplay from './components/IntervalSineWaveDisplay'
import IntervalStaffDisplay from './components/IntervalStaffDisplay'
import Piano from './components/Piano'

import intervals, { Interval } from './intervals'
import { getSynth } from './synth'

const App = () => {
  const [interval, setInterval] = useState<Interval | null>(null)

  const handleAttack = async (interval: Interval) => {
    const synth = await getSynth()

    synth.triggerAttack(intervals[interval].frequency)
    setInterval(interval)
  }

  const handleRelease = async (interval: Interval) => {
    const synth = await getSynth()

    synth.triggerRelease(intervals[interval].frequency)
  }

  return (
    <div className={styles.app}>
      <IntervalSineWaveDisplay interval={interval} />
      Interval: {interval}
      <Piano onAttack={handleAttack} onRelease={handleRelease} />
      <IntervalLineDisplay interval={interval} />
      <IntervalStaffDisplay interval={interval} />
    </div>
  )
}

export default App
