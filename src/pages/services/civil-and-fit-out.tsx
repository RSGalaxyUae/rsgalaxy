import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const services = [
    'Complete turnkey interior contracting services',
    'High quality joinery works',
    'Architectural works',
    'Wooden / Decorative Floor finishes, Wall coverings, Carpets',
    'Project Management.',
    'Decorative Gypsum works.',
    'Décor Contracting.Includes Drywall partitions, False Ceilings',
    'Painting, decorative painting etc.',
    'Fitout Electro Mechanical Services Including Air Conditioning, Ventilation, Electrical & Plumbing, Specialized systems',
    'Raised Flooring Solutions',
    'Aluminium & Glass works',
    'Flooring Including Ceramic, Marble, Granite, Parquet flooring, Carpet/Vinyl/Sports flooring etc.',
    'Civil Masonry Including Block works, Plastering, Concrete works, Screeding etc.'
]

const CivilAndFitOutPage = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Civil & Fit-out Solutions'
                contentTitle='Delivering world class Fit-out Solutions through skilled and trained professionals.'
                contentDesc="RSGalaxy is as one of the leading companies in UAE offering a wide range of high-quality and integrated solutions in the Civil and fit-out industry. At RSGalaxy, we specialize in providing our customers efficient, cost-effective solutions for their interior designing and fit-out contracting needs. RSGalaxy’s head office is located in Abu Dhabi and is ISO 9001:2015 certified. RSGalaxy provides bespoke interior fit-outs solutions for offices, residential, commercial, retail, and hospitality projects. We execute fit-out works including project management, all types of civil works (False Ceilings, wooden works), MEP (air conditioning, ventilation, electrical & plumbing,) décor, and joinery works as well. We deliver creative and cost-effective complete turnkey interior contracting services fulfilling the needs of our clients and the requirements of the project management (consultants /procurement). RSGalaxy’s approach is to deliver creative and cost-effective results that inspire and fascinate people through the use of cutting-edge technology-driven machines and a large, reliable team and workforce. At RSGalaxy, our commitment to professionalism is unparalleled. We always deliver supreme quality."
                image='/assets/images/civil-and-fitout-service.jpg'
                offeredServices={services}
            />
            <EnquirySection />
        </>
    )
}

export default CivilAndFitOutPage