import * as Tone from 'tone'

let synth: Tone.PolySynth | null = null

export const getSynth = async () => {
  await Tone.start()

  if (synth) {
    return synth
  } else {
    synth = new Tone.PolySynth().toDestination()

    synth.set({
      volume: 0,
      detune: 0,
      portamento: 0,
      envelope: {
        attack: 0.05,
        decay: 0.1,
        release: 0.7,
        sustain: 0.1,
        // attackCurve: 'linear',
        // decay: 0.3,
        // decayCurve: 'exponential',
        // release: 0.8,
        // releaseCurve: 'exponential',
        // sustain: 0.4,
      },
      oscillator: {
        partialCount: 0,
        phase: 0,
        type: 'triangle',
      },
    })

    return synth
  }
}
