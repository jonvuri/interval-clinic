import * as Tone from 'tone'

let synth: Tone.PolySynth | null = null

export const getSynth = async () => {
  await Tone.start()

  if (synth) {
    return synth
  } else {
    synth = new Tone.PolySynth().toDestination()

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
}
