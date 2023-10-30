
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    'Event Cleaning',
    'Marble Crystallization and Polishing',
    'Tiles Grinding',
    'Carpet Shampooing',
    'Deep Cleaning (post Construction)',
    'Supply Toilet Consumables (Hand Tissue, Toilet Roll, Air Freshener …etc.)',
    'High Level glass and façade cleaning by our well trained and certified team (Via BMU and rope access team)',
    'Infra-structure cleaning (roads, street, street light pools, paved and unpaved open areas etc...',
    'Daily routine cleaning on annual contract basis for public areas',
    'Façade cleaning Via rope access, Cradle, Scaffolding, and Boom lift.'
]

const CleaningService = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Cleaning Solutions'
                contentTitle='Commercial & Office Cleaning Solutions'
                contentDesc="We pride ourselves on the excellent quality of the cleaning services we deliver for commercial, residential, and public facilities further to clinics as well. Our cleaning solutions include everything from, tiles, floors, and carpets to glass & façade cleaning, and deep cleaning. Our motivated and professional cleaning operatives are fully trained at using the latest machinery and are experienced in providing high-quality cleaning solutions for all types of buildings and office environments."
                image='/assets/images/joinery-works-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default CleaningService