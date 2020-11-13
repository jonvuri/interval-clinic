import React, { useCallback, useEffect, useState } from 'react'

import { ActiveIntervals, Interval } from '../intervals'

import styles from './Piano.module.css'

type KeyProps = {
  interval: Interval
  display: string
  keyboardKey: string
  displayKeyboardKey: string
  activeIntervals: ActiveIntervals
  samplerPlaying: boolean
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
  onToggleInterval: (interval: Interval) => void
}

type BaseKeyProps = KeyProps & {
  cssClassName: string
}

const BaseKey = ({
  cssClassName,
  interval,
  display,
  keyboardKey,
  displayKeyboardKey,
  activeIntervals,
  samplerPlaying,
  onAttack,
  onRelease,
  onToggleInterval,
}: BaseKeyProps) => {
  const [pressed, setPressed] = useState(false)

  const svgPatternIdRed = `${cssClassName}-circles-red`
  const svgPatternIdGreen = `${cssClassName}-circles-green`
  const svgPatternIdBlue = `${cssClassName}-circles-blue`

  const handleMouseEnter = useCallback(
    (event) => {
      // Left click button
      if (event.buttons === 1) {
        onAttack(interval)
        setPressed(true)
      }
    },
    [interval, onAttack, setPressed]
  )

  const handleMouseDown = useCallback(
    (event) => {
      event.preventDefault()
      onAttack(interval)
      setPressed(true)
    },
    [interval, onAttack, setPressed]
  )

  const handleMouseUp = useCallback(() => {
    onRelease(interval)
    setPressed(false)
  }, [interval, onRelease, setPressed])

  const handleKeyDown = useCallback(
    (event) => {
      if (event.code === keyboardKey && !event.repeat) {
        onAttack(interval)
        setPressed(true)
      }
    },
    [interval, keyboardKey, onAttack, setPressed]
  )

  const handleKeyUp = useCallback(
    (event) => {
      if (event.code === keyboardKey && !event.repeat) {
        onRelease(interval)
        setPressed(false)
      }
    },
    [interval, keyboardKey, onRelease, setPressed]
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
  })

  const handleCheckboxChange = () => {
    onToggleInterval(interval)
  }

  return (
    <div className={styles.keyContainer}>
      <div className={styles.header}>
        <div className={styles.keyLabel}>{display}</div>
        <div className={styles.keyCheckbox}>
          <input
            type="checkbox"
            disabled={samplerPlaying}
            checked={activeIntervals[interval]}
            onChange={handleCheckboxChange}
          />
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onMouseEnter={handleMouseEnter}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className={`${cssClassName}${pressed ? ` ${styles.keyPressed}` : ''}`}
      >
        <svg width="100%" height="100%" className={styles.keyComponentGreen}>
          <pattern
            id={svgPatternIdGreen}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdGreen})`}
          ></rect>
        </svg>
        <svg width="100%" height="100%" className={styles.keyComponentRed}>
          <pattern
            id={svgPatternIdRed}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdRed})`}
          ></rect>
        </svg>

        <svg width="100%" height="100%" className={styles.keyComponentBlue}>
          <pattern
            id={svgPatternIdBlue}
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <circle fill="inherit" cx="5" cy="5" r="3"></circle>
          </pattern>

          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill={`url(#${svgPatternIdBlue})`}
          ></rect>
        </svg>
      </div>
      <div className={styles.keyboardLabel}>{displayKeyboardKey}</div>
    </div>
  )
}

const WhiteKey = ({
  interval,
  display,
  keyboardKey,
  displayKeyboardKey,
  activeIntervals,
  samplerPlaying,
  onAttack,
  onRelease,
  onToggleInterval,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.whiteKey}
    interval={interval}
    display={display}
    keyboardKey={keyboardKey}
    displayKeyboardKey={displayKeyboardKey}
    activeIntervals={activeIntervals}
    samplerPlaying={samplerPlaying}
    onAttack={onAttack}
    onRelease={onRelease}
    onToggleInterval={onToggleInterval}
  />
)

const BlackKey = ({
  interval,
  display,
  keyboardKey,
  displayKeyboardKey,
  activeIntervals,
  samplerPlaying,
  onAttack,
  onRelease,
  onToggleInterval,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.blackKey}
    interval={interval}
    display={display}
    keyboardKey={keyboardKey}
    displayKeyboardKey={displayKeyboardKey}
    activeIntervals={activeIntervals}
    samplerPlaying={samplerPlaying}
    onAttack={onAttack}
    onRelease={onRelease}
    onToggleInterval={onToggleInterval}
  />
)

type Props = {
  activeIntervals: ActiveIntervals
  samplerPlaying: boolean
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
  onToggleInterval: (interval: Interval) => void
}

const Piano = ({
  activeIntervals,
  samplerPlaying,
  onAttack,
  onRelease,
  onToggleInterval,
}: Props) => {
  return (
    <div className={styles.container}>
      <WhiteKey
        interval="U"
        display="U"
        keyboardKey="KeyQ"
        displayKeyboardKey="Q"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <BlackKey
        interval="m2"
        display="m2"
        keyboardKey="Digit2"
        displayKeyboardKey="2"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="M2"
        display="M2"
        keyboardKey="KeyW"
        displayKeyboardKey="W"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <BlackKey
        interval="m3"
        display="m3"
        keyboardKey="Digit3"
        displayKeyboardKey="3"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="M3"
        display="M3"
        keyboardKey="KeyE"
        displayKeyboardKey="E"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="P4"
        display="P4"
        keyboardKey="KeyR"
        displayKeyboardKey="R"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <BlackKey
        interval="A4"
        display="T"
        keyboardKey="Digit5"
        displayKeyboardKey="5"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="P5"
        display="P5"
        keyboardKey="KeyT"
        displayKeyboardKey="T"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <BlackKey
        interval="m6"
        display="m6"
        keyboardKey="Digit6"
        displayKeyboardKey="6"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="M6"
        display="M6"
        keyboardKey="KeyY"
        displayKeyboardKey="Y"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <BlackKey
        interval="m7"
        display="m7"
        keyboardKey="Digit7"
        displayKeyboardKey="7"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="M7"
        display="M7"
        keyboardKey="KeyU"
        displayKeyboardKey="U"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
      <WhiteKey
        interval="O"
        display="O"
        keyboardKey="KeyI"
        displayKeyboardKey="I"
        activeIntervals={activeIntervals}
        samplerPlaying={samplerPlaying}
        onAttack={onAttack}
        onRelease={onRelease}
        onToggleInterval={onToggleInterval}
      />
    </div>
  )
}

export default Piano
