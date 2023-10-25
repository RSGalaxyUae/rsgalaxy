import React from 'react'
import { SectionTitle } from '../ui/Typography'
import { Button } from '../ui/button'

const CtaSection = () => {
  return (
    <div className='bg-primary py-20 flex items-center justify-center gap-10 md:flex-row flex-col text-primary-foreground'>
        <SectionTitle className='uppercase text-center md:text-left'>Ready to Transform Your Business?</SectionTitle>
        <Button variant={'secondary'}>Get Started</Button>
    </div>
  )
}

export default CtaSection