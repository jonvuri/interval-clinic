import React from 'react'

import styles from './PlayPauseButton.module.css'

type Props = {
  playing: boolean
}

const PlayPauseButton = ({ playing }: Props) => {
  return (
    <div
      className={`${styles.playButton}${playing ? '' : ` ${styles.paused}`}`}
    >
      <div className={styles.left}></div>
      <div className={styles.right}></div>
      <div className={styles.triangleOne}></div>
      <div className={styles.triangleTwo}></div>
    </div>
  )
}

export default PlayPauseButton
