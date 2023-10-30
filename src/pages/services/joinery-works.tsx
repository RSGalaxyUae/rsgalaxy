
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'



const JoineryWorks = () => {
    return (
        <>
        <ServicePageTemplate
            serviceTitle='Joinery Works'
            contentTitle='Modern and sophisticated accredited interiors, fit out and joinery'
            contentDesc="RSGalaxy Industry has one of the biggest plants for joinery, carpentry, upholstery, and furniture manufacturing facilities in the region. It is located in the Dubai Investment Park – Dubai, and occupies an area of 1,000 square meters. This huge purpose-built plant attests to a commitment to quality craftsmanship and professionalism by the group. Fully air-conditioned and fitted with an exhaust system to provide a dust-free environment, the plant is equipped with a comprehensive range of the latest state-of-the-art types of machinery, which make the company one of the most efficient, advanced, and sophisticated Companies of its nature in the gulf region."
            image='/assets/images/joinery-works-service.jpg'
        />
        <EnquirySection />
    </>
    )
}

export default JoineryWorks