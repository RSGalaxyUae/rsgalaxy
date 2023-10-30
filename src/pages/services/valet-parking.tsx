
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    "Resturant",
    "Resort",
    'Hotels',
    'Country Clubs',
    "Reception Centers",
    "Malls",
    "Hospitals",
    "Special Events",
    "Corporate Office"
]

const ValetParking = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Valet Parking'
                contentTitle='Valet Parking'
                contentDesc={`RSGalaxy is a pioneer in valet parking services, providing a safe, high-quality experience to a wide range of clients’ portfolio. Our VP solutions are primarily targeted at hotels, and malls, as well as, special events, banks, and government entities. The RSGalaxy VP's solution is a perfect addition to every business occasion, ensuring a luxurious experience for your customers.
                                Our Professional Valet drivers are well qualified, skilled, and trained in their field. At RSGalaxy, we aim to make your visitors welcomed and offer them peace of mind about their vehicle's security.`}
                image='/assets/images/valet-parking-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default ValetParking