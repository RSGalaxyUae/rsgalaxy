import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const services = [
    'To provide the design, engineering, supply, installation and after sales services of annual maintenance and spares of BMUs that EIFM supplies in UAE',
    'To provide after sales services & spares of BMU equipment of all brands',
    'To provide economical & safe concept and sale of cradles & suspension mechanism for construction purpose during construction of the projects or routine maintenance',
    "To provide RSGalaxy's knowledge and solutions to upgrade the existing system",
    "To provide complete range of access solutions/equipment - roof/ elevation/under hung mounted or ground based",
    "To provide operators and training to operators of Access Equipment",
    "Retro fitting of additional BMUs and replacement of existing outdated units",
    "To provide Third Party Inspections (outsourced)",
]

const CivilAndFitOutPage = () => {
    return (
        <>
            <>
            <ServicePageTemplate
                serviceTitle='Building Maintenance Unit'
                contentTitle='For building maintenance units solutions, we are the ones worth relying.'
                contentDesc="RSGalaxy is a UAE leading supplier of European facade access solutions. RSGalaxy is the leading specialist in supplying European fully customized Building Maintenance Units. We provide a wide range of Suspended Access Cradles (Building Maintenance Units) and building access units to architects, consultants, developers, constructors and building owners."
                image='/assets/images/building-maintenance-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>

        </>
    )
}

export default CivilAndFitOutPage