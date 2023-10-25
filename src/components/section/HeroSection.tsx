import { nanoid } from 'nanoid';
import React, { type ReactNode } from 'react'
import Slider, {Settings} from "react-slick";
import HeroSlide from '../shared/HeroSlide';
import { Button } from '../ui/button';

const heroSlides: {title: string, desc: string, image: string, action?: ReactNode}[] = [
    {
      title: "Unlocking Innovative Solutions",
      desc: "High-quality MEP engineering projects tailored for government and private sectors, delivering excellence in building environments.",
      image: "/assets/images/hero-civil-engg.jpg",
        action: <Button>Contact Us</Button>
    },
    {
      title: "Transforming Spaces with Precision",
      desc: "Bringing MEP, civil, and fit-out expertise to life in commercial and residential spaces, creating environments of distinction.",
      image: "",
      action: <Button>Contact Us</Button>
    },
    {
      title: "Elevating Building Maintenance",
      desc: "Cost-effective building access solutions for all types of buildings, ensuring safety and functionality with every installation.",
      image: "",
      action: <Button>Contact Us</Button>
    },
    {
      title: "Crafting Distinctive Joinery",
      desc: "Creating accredited interiors and bespoke joinery works, meeting the needs of quality-conscious clients with sophistication.",
      image: "",
      action: <Button>Contact Us</Button>
    },
    // Add more hero slides for other services as needed
  ];
  
  // You can use the 'heroSlides' array to create attractive hero slides for your website related to these services.
  


const HeroSection = () => {
  const setting:Settings = {
    dots: false
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
                                action= {<div className='flex items-center justify-center pt-5'>{hero.action}</div>}
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