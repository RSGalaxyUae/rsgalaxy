
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    "Generating clean electricity from solar energy.",
    "Sustainable availability of energy source at own premises.",
    'Gaining energy generation independently.',
    'Insulating businesses from rising electricity prices.',
    "Reducing operational costs through decreasing the electricity bills.",
    "Enhancing the focus on own business development.",
]

const SolarSolutions = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Sustainable Solar Solutions'
                contentTitle='Sustainable Solar Solutions'
                contentDesc={`Usually, commercial and industrial roofs are not effectively utilized. However, these roof spaces have tremendous potential for producing their own electrical energy and meeting their energy needs, thus gaining several benefits, including:`}
                image='/assets/images/sustainable-solar-solutions.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default SolarSolutions