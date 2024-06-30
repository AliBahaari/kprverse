'use client'

import Loading from './containers/Loading'
import Section1 from '@/app/containers/Section1'
import Frame from './components/Frame'

export default function Home() {
  return (
    <main>
      <Loading />
      <Frame />
      <Section1 />
    </main>
  )
}
