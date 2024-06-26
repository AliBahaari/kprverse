'use client'

import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

function Loading() {
  const tl = useRef<any>(null)
  const cursor = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const [counterProgress, setCounterProgress] = useState<number>(0)

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      if (cursor && cursor.current) {
        gsap.to(cursor.current, {
          x: event.clientX - cursor.current.clientWidth / 2,
          y: event.clientY - cursor.current.clientHeight / 2,
          ease: 'ease.inOut',
          duration: 0.5,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseOver)
    return () => window.removeEventListener('mousemove', handleMouseOver)
  }, [])

  useEffect(() => {
    tl.current = gsap
      .timeline({
        delay: 0.5,
        onUpdate() {
          setCounterProgress(Math.ceil(this.progress() * 100))
        },
      })
      .to(progressBar.current, {
        width: '10%',
      })
      .to(progressBar.current, {
        width: '40%',
      })
      .to(progressBar.current, {
        width: '70%',
      })
      .to(progressBar.current, {
        width: '100%',
      })
  }, [tl])

  return (
    <div className="cursor-none">
      <div
        className="inline-flex flex-col items-center pointer-events-none"
        ref={cursor}
      >
        <div className="border w-20 h-20 border-black rounded-full"></div>
        <span className="mt-2">Click To Bubble Sound</span>
      </div>

      <div className="flex justify-center items-center h-screen">
        <div className="w-2/3">
          <div className="h-0.5 bg-slate-100">
            <div className="bg-black h-full w-0" ref={progressBar} />
          </div>
          <div className="flex flex-row items-center justify-between mt-1 uppercase">
            <div>
              <span>Loading - </span>
              {counterProgress}
              <span>%</span>
            </div>
            <span>https://kprverse.com</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loading
