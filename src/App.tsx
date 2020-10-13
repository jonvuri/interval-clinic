import React, { useState } from 'react'

import styles from './App.module.css'

import IntervalDisplay from './components/IntervalDisplay'
import Piano from './components/piano'

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
      Interval: {interval}
      <Piano onAttack={handleAttack} onRelease={handleRelease} />
      <IntervalDisplay interval={interval} />
    </div>
  )
}

export default App
