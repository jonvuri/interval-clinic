import React, { useState } from 'react'

import styles from './App.module.css'

import Piano from './components/piano'

import intervals, { Interval } from './intervals'
import synth, { startSynth } from './synth'

const App = () => {
  const [interval, setInterval] = useState<Interval | null>(null)

  const handleAttack = async (interval: Interval) => {
    await startSynth()

    synth.triggerAttack(intervals[interval].frequency)
    setInterval(interval)
  }

  const handleRelease = (interval: Interval) => {
    synth.triggerRelease(intervals[interval].frequency)
  }

  return (
    <div className={styles.app}>
      Interval: {interval}
      <Piano onAttack={handleAttack} onRelease={handleRelease} />
    </div>
  )
}

export default App
