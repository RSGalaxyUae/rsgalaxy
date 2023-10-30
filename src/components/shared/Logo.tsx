import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className=' text-primary px-3 py-1 inline-flex items-center'>
        {/* <span className='font-bold text-2xl'>RS</span>
        <span className='font-thin tracking-widest text-xl'>galaxy</span> */}

        <Image src={'/assets/logo/logo.png'} alt="RSGalaxy" width={150} height={36} />
    </div>
  )
}

export default Logo