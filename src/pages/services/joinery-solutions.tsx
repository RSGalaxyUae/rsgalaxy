
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    'Wooden Door – Non-Fire Rated and Fire Rated.',
    "Shutter Covers – CNC designs on Lacquered Paint and PCV Foil finishes with varieties of design collections."
]


const JoinerySolutions = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Joinery Solutions'
                contentTitle='Joinery Solutions'
                contentDesc={`RSGalaxy is a leading supplier in the UAE of high-quality wooden doors, kitchens, and wardrobes with Turkish-made models.
                            RSGalaxy has established a joint venture agreement with Prokap, a prominent Turkish factory and supplier of wooden doors, kitchens, and wardrobes in the UAE. Prokap is renowned for providing an extensive range of items in the wood design sector for offices, residential buildings, schools, and hospitals.`}
                image='/assets/images/joinery-services.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default JoinerySolutions