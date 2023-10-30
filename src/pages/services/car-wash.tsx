
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'

const services = [
    "Body Wash",
    'Interior Cleaning',
    'Extreme Body Wash: The Extreme Body Wash solutions targeting extremely dirty cars that require a deeper cleaning process to achieve maximum cleaning to the care without causing any damages or micro scratched to the surface.',
    'Extreme Interior Cleaning: Extreme Interior Cleaning is a full cleaning process that covers the whole interior and focuses on tough stains.',
    "Super Rinse Shine: This service applies an extra special treatment for all surfaces especially Glass and Chrome surfaces, the result is a super shining head tearing look for clients' vehicles.",
    'Interior Disinfecting: The Interior Disinfecting Service aims to sterilize the car interior removing germs or biological remains.',
]

const CarWash = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Car Wash'
                contentTitle='Car Wash'
                contentDesc={`Equipped with the latest technologies in the Mobile Car Washing domain and backed up with 24/7 logistic support and smart IT solutions, RSGalaxy's team of experienced operatives is committed to delivering a car washing experience that meets and exceeds clients' expectations. RSGalaxy's solutions are very conscious of the importance of preserving natural resources; for this, our method ensures the minimum consumption of water.
                            RSGalaxy's solutions include SUVs, Saloon cars and Motorbikes; it is designed to fulfill a wide range of your requirements:`}
                image='/assets/images/car-wash-services.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default CarWash