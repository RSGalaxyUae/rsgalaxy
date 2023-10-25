import React from 'react'
import Overlay from './Overlay'
import { SectionDescription, SectionTitle } from '../ui/Typography'

const PageHeader = ({
    title,
    desc,
    image,
    action
}: {
    title: string,
    desc?: string,
    image?: string,
    action?: string
}) => {
  return (
    <header className='py-20 md:h-96 bg-center bg-cover bg-no-repeat relative  flex items-center justify-center' style={{backgroundImage: `url(${image})`}}>
        <div className='z-10 max-w-2xl text-center text-primary-foreground'>
            <div className='flex items-center justify-center'><span className='w-8 h-8 border-[5px] border-primary' /></div>
            <SectionTitle className='md:text-7xl'>{title}</SectionTitle>
            <SectionDescription className='text-primary-foreground'>{desc}</SectionDescription>

            <div className='mt-5'>
                {action}
            </div>
        </div>

        <Overlay/>
    </header>
  )
}

export default PageHeader