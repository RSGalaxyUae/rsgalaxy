import React from 'react'
import { SectionDescription, SectionTitle } from '../ui/Typography'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import EnquiryForm from '../enquiry/EnquiryForm'
import { EnquiryTypes } from '@/schema/EnquirySchema'
import { cn } from '@/lib/utils'

const EnquirySection = ({
    type='SERVICE',
    className
}: {
    type?: EnquiryTypes,
    className?: string
}) => {
    return (
        <section className={cn([
            'my-20',
            className
        ])}>
            <div className='grid grid-cols-1 md:grid-cols-2 container mx-auto'>
                <div className='bg-primary text-primary-foreground p-10 flex items-center justify-center'>
                    <div className="max-w-2xl shrink-0 w-full space-y-3">
                        <SectionTitle>
                        Experience Seamless Service Solutions
                        </SectionTitle>

                        <SectionDescription className='text-primary-foreground/70'>
                        At RS Galaxy, we&apos;re here to provide you with top-notch service solutions tailored to your needs. Reach out to us, and let&apos;s start a conversation about how we can make your life easier. Our team is eager to assist you and transform your requirements into reality.
                        </SectionDescription>
                    </div>
                </div>

                <div className='py-10 md:p-10'>
                    <Card>
                        <CardHeader>
                            <CardTitle>Get Enquiry</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <EnquiryForm 
                                type={type}
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default EnquirySection