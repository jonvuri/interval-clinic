import React from 'react'

import styles from './TuningToggle.module.css'

type Props = {
  just: boolean
  onChange: (just: boolean) => void
}

const JustToggle = ({ just, onChange }: Props) => {
  const handleTwelveClick = () => {
    if (just) {
      onChange(false)
    }
  }

  const handleJustClick = () => {
    console.log('just click', just)
    if (!just) {
      onChange(true)
    }
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.twelveContainer}
        style={{
          stroke: just ? '#555' : '#aaa',
          color: just ? '#555' : '#aaa',
        }}
      >
        <div className={styles.inner}>12TET</div>
        <div className={styles.inner}>
          <svg width="72" height="63" viewBox="-2 -2 76 67">
            <path
              onClick={handleTwelveClick}
              strokeWidth="4px"
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M0 31.17691453623979L18 0L54 0L72 31.17691453623979L54 62.35382907247958L18 62.35382907247958Z"
            ></path>
          </svg>
        </div>
      </div>
      <div
        className={styles.justContainer}
        style={{
          stroke: just ? '#aaa' : '#555',
          color: just ? '#aaa' : '#555',
        }}
      >
        <div className={styles.inner}>Just</div>
        <div className={styles.inner}>
          <svg width="72" height="63" viewBox="-2 -2 76 67">
            <path
              onClick={handleJustClick}
              strokeWidth="4px"
              strokeLinejoin="round"
              strokeLinecap="round"
              d="M0 31.17691453623979L18 0L54 0L72 31.17691453623979L54 62.35382907247958L18 62.35382907247958Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default JustToggle
