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
        delay: 6,
        opacity: 1,
        x: -100,
        duration: 1.2,
        stagger: {
          each: 0.4,
        },
      })
    }
  }, [])

  useEffect(() => {
    if (headerText && headerText.current) {
      gsap.to(headerText.current, {
        delay: 5.5,
        duration: 6,
        ease: 'none',
        text: {
          value:
            'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.',
        },
      })
    }
  }, [])

  return (
    <div className="section1Background min-h-screen">
      <p
        ref={headerText}
        className="absolute left-[50px] top-[90px] w-[280px] text-justify text-[14px]"
      />

      <div
        className="absolute bottom-32 right-20 flex flex-col gap-10 text-9xl font-bold"
        ref={footerTexts}
      >
        <span className="opacity-0">با قدرت</span>
        <span className="mr-20 opacity-0">با کیفیت</span>
        <span className="mr-40 opacity-0">خلق کن!</span>
      </div>
    </div>
  )
}

export default Section1
