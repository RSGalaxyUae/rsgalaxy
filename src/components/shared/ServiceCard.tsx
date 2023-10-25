import { type ServiceItem } from '@/data/Services'
import Image from 'next/image'
import React from 'react'
import { CardDescription, CardTitle } from '../ui/card'

const ServiceCard = ({
    data
}: {
    data: ServiceItem
}) => {
    return (
        <div className='max-w-md relative group h-full shadow-md shadow-primary/10 transition-all bg-card hover:-translate-y-2 hover:shadow-lg'>
            <div className="box-1 absolute top-0 left-0 w-24 h-24 group-hover:w-full group-hover:h-full border-t-[5px] border-l-[5px] border-primary transition-all "></div>
            <div className="box-1 absolute bottom-0 right-0 w-24 h-24 group-hover:w-full group-hover:h-full border-b-[5px] border-r-[5px] border-primary transition-all"></div>

            <div className=''>
                <Image className='' src={data.image ?? ''} alt={data.title} width={500} height={332} />
            </div>

            <div className="p-5 space-y-3">
                <CardTitle className='tracking-wide'>{data.title}</CardTitle>
                <CardDescription>{data.description}</CardDescription>
            </div>
        </div>
    )
}

export default ServiceCard