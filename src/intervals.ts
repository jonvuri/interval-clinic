import { createContext } from 'react'

const twelveTet = (pianoKey: number) =>
  440 * Math.pow(Math.pow(2, 1 / 12), pianoKey - 49)

const TONIC = twelveTet(40)

const intervals = {
  twelve: {
    U: {
      name: 'Unison',
      note: 'C4',
      frequency: TONIC,
      upper: 1,
      lower: 1,
      color: 'rgb(25, 205, 188)',
    },
    m2: {
      name: 'Minor 2nd',
      note: 'D♭4',
      frequency: twelveTet(41),
      upper: 16,
      lower: 15,
      color: 'rgb(232, 66, 154)',
    },
    M2: {
      name: 'Major 2nd',
      note: 'D4',
      frequency: twelveTet(42),
      upper: 9,
      lower: 8,
      color: 'rgb(222, 188, 47)',
    },
    m3: {
      name: 'Minor 3rd',
      note: 'E♭4',
      frequency: twelveTet(43),
      upper: 6,
      lower: 5,
      color: 'rgb(108, 67, 177)',
    },
    M3: {
      name: 'Major 3rd',
      note: 'E4',
      frequency: twelveTet(44),
      upper: 5,
      lower: 4,
      color: 'rgb(105, 247, 93)',
    },
    P4: {
      name: 'Perfect 4th',
      note: 'F4',
      frequency: twelveTet(45),
      upper: 4,
      lower: 3,
      color: 'rgb(43, 157, 222)',
    },
    A4: {
      name: 'Tritone',
      note: 'G♭4',
      frequency: twelveTet(46),
      upper: 45,
      lower: 32,
      color: 'rgb(255, 90, 106)',
    },
    P5: {
      name: 'Perfect 5th',
      note: 'G4',
      frequency: twelveTet(47),
      upper: 3,
      lower: 2,
      color: 'rgb(45, 237, 134)',
    },
    m6: {
      name: 'Minor 6th',
      note: 'A♭4',
      frequency: twelveTet(48),
      upper: 8,
      lower: 5,
      color: 'rgb(179, 235, 83)',
    },
    M6: {
      name: 'Major 6th',
      note: 'A4',
      frequency: twelveTet(49),
      upper: 5,
      lower: 3,
      color: 'rgb(79, 107, 218)',
    },
    m7: {
      name: 'Minor 7th',
      note: 'B♭4',
      frequency: twelveTet(50),
      upper: 9,
      lower: 5,
      color: 'rgb(169, 60, 179)',
    },
    M7: {
      name: 'Major 7th',
      note: 'B4',
      frequency: twelveTet(51),
      upper: 15,
      lower: 8,
      color: 'rgb(255, 133, 60)',
    },
    O: {
      name: 'Octave',
      note: 'C5',
      frequency: twelveTet(52),
      upper: 2,
      lower: 1,
      color: 'rgb(25, 205, 188)',
    },
  },
  just: {
    U: {
      name: 'Unison',
      note: 'C4',
      frequency: TONIC,
      upper: 1,
      lower: 1,
      color: 'rgb(25, 205, 188)',
    },
    m2: {
      name: 'Minor 2nd',
      note: 'D♭4',
      frequency: TONIC * (16 / 15),
      upper: 16,
      lower: 15,
      color: 'rgb(232, 66, 154)',
    },
    M2: {
      name: 'Major 2nd',
      note: 'D4',
      frequency: TONIC * (9 / 8),
      upper: 9,
      lower: 8,
      color: 'rgb(222, 188, 47)',
    },
    m3: {
      name: 'Minor 3rd',
      note: 'E♭4',
      frequency: TONIC * (6 / 5),
      upper: 6,
      lower: 5,
      color: 'rgb(108, 67, 177)',
    },
    M3: {
      name: 'Major 3rd',
      note: 'E4',
      frequency: TONIC * (5 / 4),
      upper: 5,
      lower: 4,
      color: 'rgb(105, 247, 93)',
    },
    P4: {
      name: 'Perfect 4th',
      note: 'F4',
      frequency: TONIC * (4 / 3),
      upper: 4,
      lower: 3,
      color: 'rgb(43, 157, 222)',
    },
    A4: {
      name: 'Tritone',
      note: 'G♭4',
      frequency: TONIC * (45 / 32),
      upper: 45,
      lower: 32,
      color: 'rgb(255, 90, 106)',
    },
    P5: {
      name: 'Perfect 5th',
      note: 'G4',
      frequency: TONIC * (3 / 2),
      upper: 3,
      lower: 2,
      color: 'rgb(45, 237, 134)',
    },
    m6: {
      name: 'Minor 6th',
      note: 'A♭4',
      frequency: TONIC * (8 / 5),
      upper: 8,
      lower: 5,
      color: 'rgb(179, 235, 83)',
    },
    M6: {
      name: 'Major 6th',
      note: 'A4',
      frequency: TONIC * (5 / 3),
      upper: 5,
      lower: 3,
      color: 'rgb(79, 107, 218)',
    },
    m7: {
      name: 'Minor 7th',
      note: 'B♭4',
      frequency: TONIC * (9 / 5),
      upper: 9,
      lower: 5,
      color: 'rgb(169, 60, 179)',
    },
    M7: {
      name: 'Major 7th',
      note: 'B4',
      frequency: TONIC * (15 / 8),
      upper: 15,
      lower: 8,
      color: 'rgb(255, 133, 60)',
    },
    O: {
      name: 'Octave',
      note: 'C5',
      frequency: TONIC * 2,
      upper: 2,
      lower: 1,
      color: 'rgb(25, 205, 188)',
    },
  },
}

export type Interval = keyof typeof intervals.twelve
export type IntervalMap = typeof intervals.twelve

export type ActiveIntervals = {
  [key in Interval]: boolean
}

export const IntervalContext = createContext(intervals.twelve)

export default intervals
