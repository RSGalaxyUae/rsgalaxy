/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { PropsWithChildren, ReactElement, ReactNode, useState } from 'react'
import Drawer from 'react-modern-drawer'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Enquiry } from '@prisma/client'
import { Button } from '../ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '../ui/separator'
import { formateDate } from '@/lib/utils'
import { EnquiryOut, GeneralEnquiry, ServiceEnquiry } from '@/schema/EnquirySchema'


export const InfoSec = ({
    title,
    children
}: PropsWithChildren<{ title: string }>) => {
    return (
        <div className='mb-3'>
            <p className=' text-muted-foreground font-medium capitalize'>{title}</p>
            <Separator />
            <div className='py-2'>
                {children}
            </div>
        </div>
    )
}

const ViewEnquirySidebar = ({
    enquiry,
    children
}: {
    enquiry: EnquiryOut<GeneralEnquiry|ServiceEnquiry>,
    children?: ReactNode
}) => {


    return (
        <>
            <Sheet>
                <SheetTrigger asChild>{children ?? <Button variant={'outline'}>View Enquiry</Button>}</SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>{enquiry.name}</SheetTitle>
                    </SheetHeader>

                    <div className=''>

                        <div className='mt-5'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>View Enquiry</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <InfoSec title="Name">{enquiry.name}</InfoSec>
                                    <InfoSec title="Email">{enquiry.email}</InfoSec>
                                    <InfoSec title="Phone">{enquiry.phone}</InfoSec>
                                    <InfoSec title="Message">
                                        <div className='max-w-lg'>
                                            {enquiry.content?.message}
                                        </div>
                                    </InfoSec>
                                    <InfoSec title="Date">
                                        <p>{formateDate(enquiry.createdAt)}</p>
                                    </InfoSec>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </SheetContent>
            </Sheet>
        </>
    )
}

export default ViewEnquirySidebar