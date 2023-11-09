import AboutSection from '@/components/section/AboutSection'
import CertificateSliderSection from '@/components/section/CertificateSliderSection'
import CtaSection from '@/components/section/CtaSection'
import EnquirySection from '@/components/section/EnquirySection'
import FeaturesSection from '@/components/section/FeaturesSection'
import PageHeader from '@/components/shared/PageHeader'
import { SectionTitle } from '@/components/ui/Typography'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { nanoid } from 'nanoid'
import React from 'react'

const content = [
    {
        title: 'Our Commitment to Excellence:',
        desc: "In our pursuit of excellence, we have harnessed the power of technology to its fullest potential, seamlessly integrating it into our processes. Our diverse and well-trained team of technicians, armed with expertise across various domains, empowers us to offer a wide spectrum of solution offerings tailored to enhance efficiency and meet the unique business needs of our clients."
    },
    {
        title: "Quality and Environmental Commitment:",
        desc: "RS Galaxy takes immense pride in being ISO 9001:2015 Certified, a testament to our unwavering commitment to quality management and environmental sustainability. Over the years, we have consistently strived for innovative and technical excellence, setting new industry standards."
    },
    {
        title: "Our Proven Track Record:",
        desc: "Our ever-expanding roster of satisfied clients serves as a resounding testimony to our ability to consistently meet and exceed high standards of customer loyalty, operational efficiency, and unwavering attention to detail."
    }
]

const AboutPage = () => {
    const facultyMember = [
        {
            name: "Mr. Rakesh",
            post: 'Director (+91 7217655714)'
        },
        {
            name: "Mr. Sujeet",
            post: 'Manager (+91 7217655714)'
        },
        {
            name: "Dr. V.K Tripathi",
            post: 'Chief Consultant'
        },
    ]
    return (
        <>
            <PageHeader title='About Us' image={'/assets/images/about-us-cover.jpg'} />
            <FeaturesSection />
            <AboutSection />

            <section className='py-20'>
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-10">
                    {
                        content.map(ct => {
                            return <div key={nanoid()} className='max-w-md p-10 border-t-[5px] border-primary shadow shadow-primary/20 '>
                                <CardTitle>{ct.title}</CardTitle>
                                <CardDescription className='mt-5' >{ct.desc}</CardDescription>
                            </div>
                        })
                    }
                </div>
            </section>

            <section className='mb-20'>
                <div className='container mx-auto space-y-10'>
                    <SectionTitle>Top Faculty</SectionTitle>
                    <div className='grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            facultyMember.map(fc => (
                                <div key={nanoid()} className='max-w-md p-10 border-t-[5px] border-primary shadow shadow-primary/20 '>
                                    <CardTitle>{fc.name}</CardTitle>
                                    <CardDescription className='mt-5' >{fc.post}</CardDescription>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>

            <CertificateSliderSection />
            <CtaSection />
            <EnquirySection />
        </>
    )
}

export default AboutPage