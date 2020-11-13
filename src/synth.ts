import * as Tone from 'tone'

import { Interval } from './intervals'

export type ToneStuff = {
  synth: Tone.PolySynth
  announceInterval: (interval: Interval) => void
}

let toneStuff: ToneStuff | null = null

export const getToneStuff = async () => {
  await Tone.start()

  if (toneStuff) {
    return toneStuff
  } else {
    const synth = new Tone.PolySynth().toDestination()

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

    const unison = new Tone.Player('/unison.mp3').toDestination()
    const minorSecond = new Tone.Player('/minor-second.mp3').toDestination()
    const majorSecond = new Tone.Player('/major-second.mp3').toDestination()
    const minorThird = new Tone.Player('/minor-third.mp3').toDestination()
    const majorThird = new Tone.Player('/major-third.mp3').toDestination()
    const perfectFourth = new Tone.Player('/perfect-fourth.mp3').toDestination()
    const tritone = new Tone.Player('/tritone.mp3').toDestination()
    const perfectFifth = new Tone.Player('/perfect-fifth.mp3').toDestination()
    const minorSixth = new Tone.Player('/minor-sixth.mp3').toDestination()
    const majorSixth = new Tone.Player('/major-sixth.mp3').toDestination()
    const minorSeventh = new Tone.Player('/minor-seventh.mp3').toDestination()
    const majorSeventh = new Tone.Player('/major-seventh.mp3').toDestination()
    const octave = new Tone.Player('/octave.mp3').toDestination()

    const announceInterval = (interval: Interval) => {
      switch (interval) {
        case 'U':
          unison.start()
          return
        case 'm2':
          minorSecond.start()
          return
        case 'M2':
          majorSecond.start()
          return
        case 'm3':
          minorThird.start()
          return
        case 'M3':
          majorThird.start()
          return
        case 'P4':
          perfectFourth.start()
          return
        case 'A4':
          tritone.start()
          return
        case 'P5':
          perfectFifth.start()
          return
        case 'm6':
          minorSixth.start()
          return
        case 'M6':
          majorSixth.start()
          return
        case 'm7':
          minorSeventh.start()
          return
        case 'M7':
          majorSeventh.start()
          return
        case 'O':
          octave.start()
          return
        case null:
        default:
          return
      }
    }

    toneStuff = {
      synth,
      announceInterval,
    }

    return toneStuff
  }
}
