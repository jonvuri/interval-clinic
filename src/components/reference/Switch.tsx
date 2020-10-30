import React from 'react'

import { Interval } from '../../intervals'

import MinorSecond from './MinorSecond'
import MajorSecond from './MajorSecond'
import MinorThird from './MinorThird'
import MajorThird from './MajorThird'
import PerfectFourth from './PerfectFourth'
import Tritone from './Tritone'
import PerfectFifth from './PerfectFifth'
import MinorSixth from './MinorSixth'
import MajorSixth from './MajorSixth'
import MinorSeventh from './MinorSeventh'
import MajorSeventh from './MajorSeventh'
import Octave from './Octave'

import styles from './Switch.module.css'

type Props = {
  interval: Interval | null
}

const intervalReference = (interval: Interval | null): JSX.Element | null => {
  switch (interval) {
    case null:
    case 'U':
      return null
    case 'm2':
      return <MinorSecond />
    case 'M2':
      return <MajorSecond />
    case 'm3':
      return <MinorThird />
    case 'M3':
      return <MajorThird />
    case 'P4':
      return <PerfectFourth />
    case 'A4':
      return <Tritone />
    case 'P5':
      return <PerfectFifth />
    case 'm6':
      return <MinorSixth />
    case 'M6':
      return <MajorSixth />
    case 'm7':
      return <MinorSeventh />
    case 'M7':
      return <MajorSeventh />
    case 'O':
      return <Octave />
  }
}

const Switch = ({ interval }: Props) => (
  <div className={styles.container}>{intervalReference(interval)}</div>
)

export default Switch
