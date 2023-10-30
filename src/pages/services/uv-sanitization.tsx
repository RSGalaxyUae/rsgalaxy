import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const services = {
    'Reducing Risk In Residential Care Facilities': [
        'Vulnerable to outbreaks of respiratory infection and older residents are at risk of severe disease.',
        'This technique employs the germicidal properties of ultraviolet-C (UVC).',
        'It has been utilized in the decontamination of water, air, and various surfaces.',
        'In the hospital setting, UVC systems are used to disinfect objects which cannot be immersed in liquid biocides as well as for disinfecting high-touch surfaces.'
    ],
    'Reducing Risk in Supply Chain': [
        'Cleaning of holding areas, canteen areas, frequently touched surfaces.',
        'When social distancing measures breakdown in a busy environment, the risk of workforce transmission can increase.',
        'Regular use of NIGHTINGALE can reduce the risk of workplace transmission.'
    ],
    'Reducing risk to customers and staff in the retail store': [
        'Visitors and staff are the primary points of entry for infection into an establishment.',
        'This brings increased risk to the community.',
        'With so many surface points of contacts, it is extremely challenging to effectively deep clean on a daily basis.',
        'Regular use of NIGHTINGALE can reduce the risks of community transmission.'
    ],
    'Reducing risk in the hospitality sector': [
        'Hospitality proves to be a difficult challenge for business both large and small.',
        'NIGHTINGALE can form part of COVID Work-safe Plan.',
        'Cleaning common areas, POS, bar areas and surfaces.'
    ],

    'Reducing risk in educational facilities': [
        'Educational Facilities present a challenge with infection control.',
        'Due to high volumes of students and difficulty maintaining social distancing, disinfecting classrooms, visitor areas, staff rooms, food halls and common areas can reduce the risk of transmission.'
    ]
}

const UVSanitization = () => {
  return (
    <>
            <ServicePageTemplate
                serviceTitle='UV SANITIZATION'
                contentTitle='UV SANITIZATION'
                contentDesc={`Ultraviolet radiation (UV) has a well-known antiviral effect. A strong germicidal effect is provided by the Light in the short-wave UVC band.
                To slow the increasing global spread of the Covid-19 virus, appropriate disinfection techniques are required.
                UVC purification has a long and honorable history in cleaning room air. Good results are obtained with this form of purification because air has a low absorption coefficient and hence allows UVC to attack micro-organisms present.`}
                image='/assets/images/uv-sanitization-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
  )
}

export default UVSanitization