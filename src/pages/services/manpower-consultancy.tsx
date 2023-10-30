
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const ManPowerConsultancy = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Man Power Consultancy'
                contentTitle='Advancing corporate growth'
                contentDesc={`RSGalaxy recruitment is a leading company providing human resources, manpower and head-hunting solutions for organizations in various industries. Augmented by a team of experts with thorough knowledge and experience in local and international recruitment solutions. RSGalaxy Recruitment is involved in challenging search assignments and has successfully played a vital role in the hiring process cycles of diversified business sectors
                Composed of a professional team of dynamic recruitment consultants, RSGalaxy Recruitment work to plan, develop and execute the most professional recruitment solutions that meet the requirements of clients and contribute to the success of any organization by supplying the best-fit talent and manpower.
                RSGalaxy Recruitment solutions provide quick response to the client's needs yet assuring an efficient partnership.`}
                image='/assets/images/mapower-consultancy-service.jpg'
            />
            <EnquirySection />
        </>
    )
}

export default ManPowerConsultancy