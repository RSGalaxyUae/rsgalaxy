import React from 'react'
import Overlay from './Overlay'
import { SectionDescription, SectionTitle } from '../ui/Typography'
import { cn } from '@/lib/utils'

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
            <div className='flex items-center justify-center'><span className={cn([
                'w-8 h-8 border-[5px] border-primary',
                {'border-white': !image}
            ])} /></div>
            <SectionTitle className='md:text-7xl'>{title}</SectionTitle>
            <SectionDescription className='text-primary-foreground'>{desc}</SectionDescription>

            <div className='mt-5'>
                {action}
            </div>
        </div>

        <Overlay className={cn([
            {'bg-gradient-to-tr from-[#722de2] to-[#4A00E0] ': !image}
        ])} />
    </header>
  )
}

export default PageHeader