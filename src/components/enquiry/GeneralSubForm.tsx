import {type ServiceCodes } from '@/data/Services'
import { type CreateEnquiryInput, type UpdateEnquiryInput } from '@/schema/EnquirySchema'
import React from 'react'
import { type UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'

import { Textarea } from '../ui/textarea'
import { Input } from '../ui/input'

const GeneralSubForm = ({
    form
}: {
    form?: UseFormReturn<CreateEnquiryInput | UpdateEnquiryInput>,
    pinned?: ServiceCodes
}) => {

   
    return (
        <>
            <FormField
                name='content.subject'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>What is Subject?</FormLabel>
                        <FormControl>
                            <Input placeholder="I want your service!" {...field}/>
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />

            <FormField
            name="content.message"
            render={({field}) => (
                <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                        <Textarea {...field} placeholder='Eg: I want to get enquiry for this service.' />
                    </FormControl>
                    <FormMessage/>
                </FormItem>
            )}
            />
        </>
    )
}

export default GeneralSubForm