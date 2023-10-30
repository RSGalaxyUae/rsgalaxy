import EnquirySection from '@/components/section/EnquirySection'
import PageHeader from '@/components/shared/PageHeader'
import Square from '@/components/shared/Square'
import { SectionDescription, SectionTitle } from '@/components/ui/Typography'
import { ChevronRight } from 'lucide-react'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import React from 'react'


const enggServices = {
    'Facility Maintenance Solutions': [
        'Computer Aided Facilities Management (CAFM)',
        'Reactive and preventive maintenance',
        'Gate barrier system maintenance & repairs',
        'Swimming pool maintenance',
        'HVAC system operations, maintenance & repairs',
        'Sliding doors/gates and shutters maintenance & repairs',
        'Electrical system maintenance & repairs',
        'Access equipment’s maintenance & repairs',
        'Plumbing & water system maintenance & repairs',
        'Generators maintenance & repairs',
        'Mechanical system maintenance & repairs',
        'UPS system maintenance & repairs',
        'General building maintenance & repairs including painting and carpentry',
        'Lighting & lighting protection maintenance & repairs',
        'BMS system maintenance & repairs',
        'Drainage cleaning solutions',
        'Fire Alarm & firefighting system',
        'Water tank cleaning and disinfection solutions',
        'Public address and voice alarm system',
        'Testing & inspections',
        'Lifts & escalators maintenance & repairs',
        'Fit out maintenance & repairs',
        'Access control system maintenance & repairs',
        'Civil works maintenance & repairs'
    ],
    'MEP Contracting Solutions': [
        'HVAC system Installation',
        'Electrical System Installation',
        'Plumbing & Water System Installation',
        'Low Current Systems Installation',
        'LPG System Installation',
        'Fire & Emergency Systems Installation',
        'IT works/services Installation'
    ],
    'Internal Duet Cleaning an Disinfection Solutions': [
        'Internal cleaning of ducts',
        'Sanitization of ducting'
    ]
}



const EngineeringPage = () => {
    return (
        <>
            <PageHeader title='Engineering Soluions' />

            <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10'>
                <div className='flex items-center justify-center'>
                    <div className="max-w-2xl space-y-3">
                        <Square />
                        <SectionTitle>Delivering world class Engineering Solutions through skilled and trained professionals.</SectionTitle>
                        <SectionDescription className='pt-5'>
                            Emirates International Facility Management LLC, an ISO 9001:2015 Certified Company, was founded in UAE, and offers bespoke property support through a full range of efficient facilities management solutions and exceptional technical services.
                            As delivering a full range of solutions including Facility Maintenance, Civil & MEP Contracting, Fit-Out Works, etc., we are dedicated to a policy of continuous process improvement, and we always aim to provide customized, functional, and cost-effective solutions that contribute to each projectapos;s overall success, sustainability, and productivity.
                        </SectionDescription>
                    </div>
                </div>
                <div className=''>
                    <Image src={'/assets/images/engineering-solutions-service.jpg'} alt={'engineering-solutions-service'} width={1000} height={500} />
                </div>
            </div>


            <section className='bg-primary/5 py-20'>
            <div className='max-w-6xl mx-auto space-y-10'>
                <div className='flex items-center justify-center flex-col'>
                    <Square />
                    <SectionTitle>RSGalaxy Core Engineering Solutions Includes</SectionTitle>
                </div>

                <div className='space-y-10'>
                    {
                        Object.entries(enggServices).map(([key, value]) => {
                            return <div key={nanoid()}>
                                <h3 className='font-bold text-lg mb-3'>{key}</h3>

                                <ul className='bg-white grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-3 shadow-lg shadow-primary/10 border-[1px] border-primary/20'>
                                    {
                                        value.map(val => (
                                            <li key={nanoid()} className='flex items-start gap-3 text-muted-foreground '>
                                                <span>
                                                    <ChevronRight className='text-primary w-6 h-6' />
                                                </span>
                                                <span className=''>{val}</span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        })
                    }
                </div>

            </div>
            </section>
            <EnquirySection type='SERVICE' className='my-20'/>
        </>
    )
}

export default EngineeringPage