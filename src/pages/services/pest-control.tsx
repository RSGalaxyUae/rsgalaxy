
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    'Installation & cleaning of the rodent bait stations, filling & refilling of baits (for rats)',
    'Installation & replacement of glue boards (indoor mice control)',
    'Installation of live traps & cleaning',
    'Extraction of dead /caught rats/ mice and monitoring.',
    'Installation of tamper proof rodent boxes with baits at immediate external areas.',
]

const CleaningService = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Pest Control Solutions'
                contentTitle='Pest Control Solutions'
                contentDesc={`When you choose a Pest control partner, you should be confident that they will offer you high-quality and the most efficient services providing you with the peace of mind that comes from knowing your pest problem is over.

                That’s where RSGalaxy professional Pest control solutions can help! RSGalaxy offers pest control reliable, fast, and effective services for both residential and commercial buildings across UAE. RSGalaxy is compliant with the highest international standards and using the latest technology specialized equipment with safe and environmentally friendly products. All our technicians are trained and certified assuring you of the highest, professional, quality services you can trust.
                
                We provide a comprehensive range of pest services that include all types of rodents (rats/mice), flies, bees, wasps, ants, roaches, silverfish, bedbugs and all other crawling insects classified as public health pests.
                
                `}
                image='/assets/images/pest-control-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default CleaningService