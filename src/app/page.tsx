'use client'

import { useEffect, useState } from 'react'
import Loading from './containers/Loading'
import Section1 from '@/app/containers/Section1'
import Frame from './components/Frame'

export default function Home() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setTimeout(() => setShowContent(true), 2500)
  }, [])

  return (
    <main>
      <Loading />
      <Frame isVisible={showContent} />
      <Section1 />
    </main>
  )
}
