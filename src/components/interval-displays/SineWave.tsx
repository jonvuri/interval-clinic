import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../../intervals'
import SineRepeater from '../SineRepeater'

import styles from './SineWave.module.css'

type Props = {
  interval: Interval | null
}

const SineWave = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  return (
    <div className={styles.container}>
      <div className={styles.backgroundContainer}>
        <SineRepeater cycles={64} width={100} height={50} />
      </div>
      {interval === null ? null : (
        <div
          className={styles.foregroundContainer}
          style={{ stroke: intervals[interval].color }}
        >
          <SineRepeater
            cycles={64}
            width={
              100 / (intervals[interval].frequency / intervals['U'].frequency)
            }
            height={50}
          />
        </div>
      )}
    </div>
  )
}

export default SineWave
