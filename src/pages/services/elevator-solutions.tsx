
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const services = [
    'Machine room less Elevators with Gearless synchronous motors.',
    "Machine Room Above Elevator with Geared Asynchronous motor.",
    "Hydraulic Elevators.",
    "Home Lift, Hydraulic and Machine room less-which allows lifts to be installed anywhere in the house.",
    "Dumbwaiter Elevators",
    "Hydraulic platforms.",
    "Panoramic Elevators",
    "Hospital Elevators",
    "Car lifts-for automobiles",
    "Cargo elevators",
    "Firefighter Elevators.",
    "Villa Elevators."
]

const ElvatorSolutions = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Elevator Solutions'
                contentTitle='Elevator Solutions'
                contentDesc={`RSGalaxy is the leading supplier of elevators in the UAE. RSGalaxy has a joint venture agreement with EMAK Asansor, which has over 50 years of experience in the elevator industry and is considered the leading supplier of Turkish elevator brands in the UAE. RSGalaxy provides a wide range of elevator types, including passenger lifts, service lifts, fire lifts, and car lifts, as well as special application lifts that can be customized according to the customer's request.`}
                image='/assets/images/elevator-solutions.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default ElvatorSolutions