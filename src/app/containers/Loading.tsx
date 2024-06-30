'use client'

import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

function Loading() {
  const tl = useRef<any>(null)
  const cursor = useRef<HTMLDivElement>(null)
  const progressBar = useRef<HTMLDivElement>(null)
  const logoPattern = useRef<HTMLImageElement>(null)
  const logo = useRef<HTMLImageElement>(null)
  const loadingContainer = useRef<HTMLDivElement>(null)
  const [counterProgress, setCounterProgress] = useState<number>(0)
  const [showLoading, setShowLoading] = useState(true)

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
      })
      .to(progressBar.current, {
        duration: 2,
        width: '100%',
        ease: 'none',
        onUpdate() {
          setCounterProgress(Math.ceil(this.progress() * 100))
        },
      })
      .to(loadingContainer.current, {
        duration: 0.5,
        opacity: 0,
      })
      .to(logoPattern.current, {
        duration: 1,
        opacity: 1,
      })
      .to(logoPattern.current, {
        duration: 0.25,
        opacity: 0,
      })
      .to(logo.current, {
        duration: 1,
        opacity: 1,
        onComplete() {
          setShowLoading(false)
        },
      })
  }, [tl])

  return (
    <AnimatePresence>
      {showLoading && (
        <>
          <motion.div
            className="fixed left-0 top-0 z-10 h-full w-full cursor-none overflow-hidden bg-white text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute left-0 top-0 h-full w-full opacity-0" ref={logoPattern}>
              <Image src={'/Pattern.png'} alt="Pattern" className="object-contain" fill />
            </div>
            <div className="absolute left-0 top-0 h-full w-full opacity-0" ref={logo}>
              <Image src={'/Logo.png'} alt="Logo" className="object-contain" fill />
            </div>

            <div
              className="pointer-events-none absolute left-0 top-0 z-10 inline-flex flex-col items-center"
              ref={cursor}
            >
              <div className="h-20 w-20 rounded-full border border-black"></div>
              <span className="mt-2">کلیک کن تا بشنوی!</span>
            </div>

            <div className="flex h-full items-center justify-center" ref={loadingContainer}>
              <div className="w-2/3">
                <div className="h-0.5 bg-gray-300">
                  <div className="h-full w-0 bg-black" ref={progressBar} />
                </div>
                <div className="mt-1 flex flex-row items-center justify-between uppercase">
                  <div>
                    <span>بارگیری - </span>
                    {counterProgress}
                    <span>%</span>
                  </div>
                  <span>https://website.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Loading
