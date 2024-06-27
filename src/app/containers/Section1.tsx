import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import TextPlugin from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

function Section1() {
  const footerTexts = useRef<HTMLDivElement>(null)
  const headerText = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (footerTexts && footerTexts.current) {
      gsap.to([...(footerTexts.current?.children as any)], {
        delay: 3.5,
        opacity: 1,
        x: -100,
        duration: 1.2,
        stagger: {
          each: 0.1,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (headerText && headerText.current) {
      gsap.to(headerText.current, {
        delay: 2.5,
        duration: 6,
        text: {
          value:
            'Ex nostrud incididunt aliquip irure quis adipisicing nulla non pariatur excepteur excepteur. Et eiusmod cillum exercitation exercitation sint sint magna ullamco amet enim reprehenderit eu ex. Eu velit aliqua et ad et qui. Labore consectetur laborum pariatur qui ipsum irure cillum.',
        },
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-600">
      <p
        ref={headerText}
        className="absolute left-[110px] top-[90px] w-[280px] text-justify text-[14px] font-bold"
      />

      <div
        className="absolute bottom-32 right-20 flex flex-col gap-10 text-9xl font-bold"
        ref={footerTexts}
      >
        <span className="opacity-0">Keep</span>
        <span className="opacity-0">Protect</span>
        <span className="opacity-0">Re-Imagine</span>
      </div>
    </div>
  )
}

export default Section1
