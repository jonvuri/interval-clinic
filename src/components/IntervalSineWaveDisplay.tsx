import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../intervals'
import SineRepeater from './SineRepeater'

import styles from './IntervalSineWaveDisplay.module.css'

type Props = {
  interval: Interval | null
}

const IntervalSineWaveDisplay = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  return (
    <div className={styles.container}>
      <div className={styles.tonicInfoLabel}>
        &nbsp;C4&nbsp;&nbsp;{intervals['U'].frequency.toFixed(2)}Hz
        {interval !== null && (
          <span
            className={styles.intervalInfoLabel}
            style={{ color: intervals[interval].color }}
          >
            {intervals[interval].frequency.toFixed(2)}Hz
          </span>
        )}
      </div>
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

export default IntervalSineWaveDisplay
