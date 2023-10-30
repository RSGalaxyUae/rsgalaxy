
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

const SecurityServiceSolutions = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Security service solutions'
                contentTitle='Professional Trained Team for All Security Requirements'
                contentDesc={`EIFM Security is a well-recognized leading security firm across the UAE that provides top-notch security services. We offer companies, organizations, and individuals a wide variety of reliable safety and protection services. EIFM customized security solutions are tailored to our client’s particular security needs and requirements.
                All our security guards are fully trained and well experienced to properly secure your property, facility, corporate, and event.
                At EIFM, we offer superior security services 24 hours a day. From schools, educational entities to financial institutions, governmental and mall facilities, our commitment to quality and the highest standards of security solutions ensure that your business runs smoothly and you're provided with reliable security services.`}
                image='/assets/images/security.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default SecurityServiceSolutions