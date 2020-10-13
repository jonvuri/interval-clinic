import * as Tone from 'tone'

export const getSynth = async () => {
  await Tone.start()

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

  return synth
}
