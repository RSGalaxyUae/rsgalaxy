import { certificates } from '@/data/certificates'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import { SectionDescription, SectionTitle } from '../ui/Typography'
import Overlay from '../shared/Overlay'


const CertificateSliderSection = () => {

    return (
        <section className='overflow-hidden bg-primary/5 bg-center bg-fixed bg-cover bg-no-repeat mt-20' style={{ backgroundImage: `url(/assets/images/cert-bg.jpg)` }}>
            <Slider>
                {
                    certificates.map(cert => {
                        return <div key={nanoid()}>
                            <div className='py-20 px-5 flex items-center justify-center relative'>
                                <div className='max-w-4xl  flex-shrink-0 w-full z-10 backdrop-blur p-5' >
                                    <div className='mb-10 flex items-center justify-center'>
                                        <Image src={cert.image} width={150} height={150} alt={cert.title} />
                                    </div>

                                    <div className='space-y-3 text-center text-white'>
                                        <SectionTitle>{cert.title}</SectionTitle>
                                        <SectionDescription className='text-white'>{cert.desc}</SectionDescription>
                                    </div>
                                </div>

                                <Overlay/>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </section>
    )
}

export default CertificateSliderSection