import SubscriberTable from '@/components/subscriber/SubscriberTable'
import React from 'react'

const SubscriberPage = () => {
  return (
    <div className='container mx-auto px-5'>
      <div className='py-5'>
        <h1 className='text-2xl font-bold'>Enquiries</h1>
      </div>
      <SubscriberTable/>
    </div>
  )
}

export default SubscriberPage