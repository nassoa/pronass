"use client"

import { useState, useEffect } from "react"

interface TypeAnimationProps {
  sequence: (string | number)[]
  className?: string
  repeat?: number | boolean
  cursor?: boolean
}

export function TypeAnimation({ sequence, className = "", repeat = false, cursor = true }: TypeAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [sequenceIndex, setSequenceIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [iterations, setIterations] = useState(0)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      const pauseDuration = sequence[sequenceIndex] as number
      timeout = setTimeout(() => {
        setIsPaused(false)
        setSequenceIndex((sequenceIndex + 1) % sequence.length)
        if (sequenceIndex + 1 >= sequence.length) {
          if (repeat === false) return
          if (typeof repeat === "number" && iterations + 1 >= repeat) return
          setIterations(iterations + 1)
        }
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting) {
      if (charIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
          setCharIndex(charIndex - 1)
        }, 30)
      } else {
        setIsDeleting(false)
        setSequenceIndex((sequenceIndex + 1) % sequence.length)
      }
    } else {
      const currentString = sequence[sequenceIndex] as string
      if (typeof currentString === "string") {
        if (charIndex < currentString.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentString.slice(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          }, 100)
        } else {
          setIsPaused(true)
        }
      } else {
        setSequenceIndex((sequenceIndex + 1) % sequence.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, sequenceIndex, charIndex, isDeleting, isPaused, sequence, repeat, iterations])

  return (
    <span className={className}>
      {displayText}
      {cursor && <span className="animate-pulse">|</span>}
    </span>
  )
}
