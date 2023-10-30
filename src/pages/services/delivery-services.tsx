
import EnquirySection from '@/components/section/EnquirySection'
import ServicePageTemplate from '@/components/shared/ServicePageTemplate'
import React from 'react'


const DeliveryServices = () => {
    return (
        <>
            <ServicePageTemplate
                serviceTitle='Delivery Services'
                contentTitle='Delivery Services'
                contentDesc={`RSGalaxy delivery service division was established in 2020. Our company has witnessed rapid growth under astute leadership. Our primary services focus on food delivery service, supply chain solutions and management for e-commerce businesses, retail, FMCG, flowers and pharmaceuticals. E-commerce has revolutionized how people trade and do business; it has extended the reach to the global markets and increased companies’ profitability.
                            RSGalaxy delivery service has a variety of flexibility and understands the overall market hurdles in day-to-day changing patterns of delivery businesses. Consequently, RSGalaxy treats each customer individually and provide timely, fast & quick delivery solutions.`}
                image='/assets/images/delivery-services.jpg'
            />
            <EnquirySection />
        </>
    )
}

export default DeliveryServices