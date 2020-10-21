import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../intervals'

import styles from './IntervalDetailsDisplay.module.css'

type Props = {
  interval: Interval | null
}

const IntervalDetailsDisplay = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  return (
    <div className={styles.container}>
      <div className={styles.tonicInfoLabel}>
        C4&nbsp;&nbsp;{intervals['U'].frequency.toFixed(2)}Hz
      </div>
      {interval !== null && (
        <div
          className={styles.intervalInfoLabel}
          style={{ color: intervals[interval].color }}
        >
          {intervals[interval].frequency.toFixed(2)}Hz
        </div>
      )}
    </div>
  )
}

export default IntervalDetailsDisplay
