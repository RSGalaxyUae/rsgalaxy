import { nanoid } from 'nanoid';
import React, { type ReactNode } from 'react'
import Slider, { type Settings } from "react-slick";
import HeroSlide from '../shared/HeroSlide';
import { Button } from '../ui/button';
import Link from 'next/link';

const heroSlides: { title: string, desc: string, image: string, action?: ReactNode }[] = [
  {
    title: "Unlocking Innovative Solutions",
    desc: "High-quality MEP engineering projects tailored for government and private sectors, delivering excellence in building environments.",
    image: "/assets/images/hero-civil-engg.jpg",
    action: <Link href="/contact"><Button>Contact Us</Button></Link>
  },
  {
    title: "Transforming Spaces with Precision",
    desc: "Bringing MEP, civil, and fit-out expertise to life in commercial and residential spaces, creating environments of distinction.",
    image: "/assets/images/civil-poster.jpg",
    action: <Link href="/contact"><Button>Contact Us</Button></Link>
  },
  {
    title: "Elevating Building Maintenance",
    desc: "Cost-effective building access solutions for all types of buildings, ensuring safety and functionality with every installation.",
    image: "/assets/images/building-poster.jpg",
    action: <Link href="/contact"><Button>Contact Us</Button></Link>
  },
  {
    title: "Crafting Distinctive Joinery",
    desc: "Creating accredited interiors and bespoke joinery works, meeting the needs of quality-conscious clients with sophistication.",
    image: "/assets/images/joinery-works-poster.jpg",
    action: <Link href="/contact"><Button>Contact Us</Button></Link>
  },
  // Add more hero slides for other services as needed
];




const HeroSection = () => {
  const setting: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000
  }
  return (
    <div className='overflow-hidden'>
      <Slider {...setting}>
        {
          heroSlides.map(hero => {
            return (
              <div key={nanoid()} className=''>
                <HeroSlide
                  {...hero}
                  action={<div className='flex items-center justify-center pt-5'>{hero.action}</div>}
                />
              </div>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default HeroSection