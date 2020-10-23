import React, { useCallback, useEffect, useState } from 'react'

import { Interval } from '../intervals'

import styles from './Piano.module.css'

type KeyProps = {
  interval: Interval
  display: string
  keyboardKey: string
  displayKeyboardKey: string
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
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
  onAttack,
  onRelease,
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

  return (
    <div className={styles.keyContainer}>
      <div className={styles.keyLabel}>{display}</div>
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
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.whiteKey}
    interval={interval}
    display={display}
    keyboardKey={keyboardKey}
    displayKeyboardKey={displayKeyboardKey}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

const BlackKey = ({
  interval,
  display,
  keyboardKey,
  displayKeyboardKey,
  onAttack,
  onRelease,
}: KeyProps) => (
  <BaseKey
    cssClassName={styles.blackKey}
    interval={interval}
    display={display}
    keyboardKey={keyboardKey}
    displayKeyboardKey={displayKeyboardKey}
    onAttack={onAttack}
    onRelease={onRelease}
  />
)

type Props = {
  onAttack: (interval: Interval) => void
  onRelease: (interval: Interval) => void
}

const Piano = ({ onAttack, onRelease }: Props) => {
  return (
    <div className={styles.container}>
      <WhiteKey
        interval="U"
        display="U"
        keyboardKey="KeyQ"
        displayKeyboardKey="Q"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m2"
        display="m2"
        keyboardKey="Digit2"
        displayKeyboardKey="2"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M2"
        display="M2"
        keyboardKey="KeyW"
        displayKeyboardKey="W"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m3"
        display="m3"
        keyboardKey="Digit3"
        displayKeyboardKey="3"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M3"
        display="M3"
        keyboardKey="KeyE"
        displayKeyboardKey="E"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="P4"
        display="P4"
        keyboardKey="KeyR"
        displayKeyboardKey="R"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="A4"
        display="T"
        keyboardKey="Digit5"
        displayKeyboardKey="5"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="P5"
        display="P5"
        keyboardKey="KeyT"
        displayKeyboardKey="T"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m6"
        display="m6"
        keyboardKey="Digit6"
        displayKeyboardKey="6"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M6"
        display="M6"
        keyboardKey="KeyY"
        displayKeyboardKey="Y"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <BlackKey
        interval="m7"
        display="m7"
        keyboardKey="Digit7"
        displayKeyboardKey="7"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="M7"
        display="M7"
        keyboardKey="KeyU"
        displayKeyboardKey="U"
        onAttack={onAttack}
        onRelease={onRelease}
      />
      <WhiteKey
        interval="O"
        display="O"
        keyboardKey="KeyI"
        displayKeyboardKey="I"
        onAttack={onAttack}
        onRelease={onRelease}
      />
    </div>
  )
}

export default Piano
