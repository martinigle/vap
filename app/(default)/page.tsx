export const metadata = {
  title: 'VAP',
  description: 'Ventanas Alta Prestacion',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Newsletter from '@/components/newsletter'
import Productos from '@/components/productos'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Newsletter />
      <Productos/>
      <Testimonials />
    </>
  )
}
