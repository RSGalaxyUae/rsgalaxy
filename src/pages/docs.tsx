import CertificateSliderSection from '@/components/section/CertificateSliderSection'
import DocImage from '@/components/shared/DocImage'
import PageHeader from '@/components/shared/PageHeader'
import { nanoid } from 'nanoid'
import React from 'react'

const DocsPage = () => {
    const docs = [
        '/assets/images/doc/bl-1.jpg',
        '/assets/images/doc/bl-2.jpg',
    ]
  return (
    <>
    <PageHeader title='Company Docs' />
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center container mx-auto mt-20'>
        {
            docs.map(doc => (
                <DocImage key={nanoid()} url={doc} />
            ))
        }
    </div>

    <CertificateSliderSection/>
    </>
  )
}

export default DocsPage