import React, { useContext } from 'react'

import { Interval, IntervalContext } from '../../intervals'

import styles from './Name.module.css'

type Props = {
  interval: Interval | null
}

const Name = ({ interval }: Props) => {
  const intervals = useContext(IntervalContext)

  return interval ? (
    <div
      className={styles.intervalNameLabel}
      style={{
        color: intervals[interval].color,
      }}
    >
      {intervals[interval].name}
    </div>
  ) : null
}

export default Name
