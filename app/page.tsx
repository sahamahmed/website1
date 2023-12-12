import Image from 'next/image'
import Banner from '@/components/Banner'
import About from '@/components/About2'
import Slider from '@/components/Slide'
import Corsels from '@/components/Corsels'
import Dotslider from '@/components/Dotslider'
// import Try from '@/components/Try'
export default function Home() {
  return (
    <main className=" w-full h-full ">
     
      <Banner></Banner>
      <Slider></Slider>
      <About></About>
      <Corsels />
      <Dotslider></Dotslider>
    </main>
  )
}





























