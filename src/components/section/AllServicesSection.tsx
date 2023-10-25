import { services } from '@/data/Services'
import { nanoid } from 'nanoid'
import React from 'react'
import ServiceCard from '../shared/ServiceCard'
import { SectionTitle } from '../ui/Typography'

const AllServicesSection = () => {
  return (
    <section className='pt-20 mt-20 px-5 bg-primary/5'>
        <div className="pb-10 ">
            <div className='flex items-center justify-center flex-col '>
                <span className='w-6 h-6 border-[5px] border-primary'></span>
                <SectionTitle>Our Services</SectionTitle>
            </div>
        </div>
        <div className='container mx-auto grid grid-cols-1 justify-items-center md:grid-cols-3 gap-10'>
            {
                services.map(service => {
                    return <div key={nanoid()}>
                        <ServiceCard data={service} />
                    </div>
                })
            }
        </div>
    </section>
  )
}

export default AllServicesSection