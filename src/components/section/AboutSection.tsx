import React from 'react'
import { SectionDescription, SectionTitle } from '../ui/Typography'
import { Button } from '../ui/button'
import Overlay from '../shared/Overlay'
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section title="About Us" className="grid grid-cols-1 md:grid-cols-2 gap-5  ">
      <div className="flex items-center justify-center relative overflow-hidden">
        <div className="max-w-2xl space-y-5 p-5 z-10">
          <div className='flex flex-col '>
            <span className='w-6 h-6 border-[5px] border-primary'></span>
            <SectionTitle>About RSgalaxy</SectionTitle>
          </div>
          <SectionDescription>
            <p>
              RS Galaxy is a leading provider of a wide range of services, dedicated to enhancing the environments of businesses and residences in the UAE. With a track record of excellence spanning over a decade, we have consistently delivered top-quality solutions across various sectors.
            </p>
            <p>
              Our mission is to exceed the expectations of our clients by offering innovative, sustainable, and cost-effective services. We are committed to ensuring the safety, functionality, and aesthetics of the spaces we work on.
            </p>
          </SectionDescription>

          <div className="pt-5">
            <Button>Learn More</Button>
          </div>
        </div>
        <div className="absolute border-[5px] border-secondary top-10 left-20 w-full h-full hidden lg:block "></div>
      </div>

      <div className="relative ">
        <Overlay />
        <Image width={1000} height={810} alt="About us section image" src={'/assets/images/about-section.jpg'} />
      </div>
    </section>
  )
}

export default AboutSection