import React, { useState } from 'react'
import * as Tone from 'tone'

import styles from './App.module.css'

import Piano from './components/piano'

const synth = new Tone.PolySynth().toDestination()

synth.set({
  envelope: {
    attack: 0.05,
    attackCurve: 'linear',
    decay: 0.3,
    decayCurve: 'exponential',
    release: 0.8,
    releaseCurve: 'exponential',
    sustain: 0.4,
  },
  oscillator: {
    type: 'triangle',
  },
})

const App = () => {
  const [endTone, setEndTone] = useState<string | null>(null)

  const handleAttack = async (tone: string) => {
    await Tone.start()

    synth.triggerAttack(tone)
    setEndTone(tone)
  }

  const handleRelease = (tone: string) => {
    synth.triggerRelease(tone)
  }

  return (
    <div className={styles.app}>
      End tone: {endTone}
      <Piano onAttack={handleAttack} onRelease={handleRelease} />
    </div>
  )
}

export default App
