import React, { type ReactNode } from 'react'

export type HeroSlideProps = {
    title?: string,
    desc?: string,
    image?: string,
    action?: ReactNode
}

const HeroSlide = ({
    title,
    desc,
    image,
    action
}: HeroSlideProps) => {
  return (
    <div className='min-h-[calc(100vh-100px)] w-full bg-center bg-cover bg-no-repeat relative flex items-center justify-center z-10' style={{backgroundImage: `url(${image})`}}>
        <div className=" absolute top-0 left-0 w-full h-full bg-primary/30 pointer-events-none -z-10 "></div>

        <div className="container px-5 flex items-center justify-center mx-auto h-full z-20">
            <div className="max-w-4xl border-[5px] border-primary space-y-4 p-10 bg-primary/10 backdrop-blur">
                <h2 className='text-5xl md:text-6xl text-center font-semibold text-white'>{title}</h2>
                <p className='text-center text-gray-200 text-lg'>{desc}</p>
                {action}
            </div>
        </div>
    </div>
  )
}

export default HeroSlide