import gsap from 'gsap'
import { useEffect, useRef } from 'react'

function Frame() {
  const frame = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.to(frame.current, {
      delay: 3,
      opacity: 1,
    })
  }, [])

  return (
    <div
      ref={frame}
      className="absolute left-1/2 top-1/2 h-[calc(100%-40px)] w-[calc(100%-40px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-gray-300 opacity-0"
    >
      <div className="absolute right-[70px] top-0 h-full w-px bg-gray-300" />
      <div className="absolute right-0 top-[50px] h-px w-full bg-gray-300" />
    </div>
  )
}

export default Frame
