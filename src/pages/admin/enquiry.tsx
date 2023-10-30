import EnquiryTable from '@/components/enquiry/EnquiryTable'
import React from 'react'

const EnquiryPage = () => {
  return (
    <div className='container mx-auto px-5'>
      <div className='py-5'>
        <h1 className='text-2xl font-bold'>Enquiries</h1>
      </div>
      <EnquiryTable/>
    </div>
  )
}

export default EnquiryPage