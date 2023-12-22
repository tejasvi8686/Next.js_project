import Image from 'next/image'
import Skills from "@/components/main/Skills"
import Hero from '@/components/main/Hero'

export default function Home() {
  return (
  <main className='h-full w-full '>
    <div className='flex flex-col gap-20'>
     <Hero />
     <Skills />
    </div>
  </main>
  )
}
