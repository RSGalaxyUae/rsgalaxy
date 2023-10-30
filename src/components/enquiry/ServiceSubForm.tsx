import { services, type ServiceCodes } from '@/data/Services'
import { type CreateEnquiryInput, type UpdateEnquiryInput } from '@/schema/EnquirySchema'
import React, { useEffect } from 'react'
import { type UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { nanoid } from 'nanoid'
import { Textarea } from '../ui/textarea'

const ServiceSubForm = ({
    form,
    pinned
}: {
    form?: UseFormReturn<CreateEnquiryInput | UpdateEnquiryInput>,
    pinned?: ServiceCodes
}) => {

    useEffect(() => {
        if (pinned) {
            form?.setValue('content.serviceId', pinned)
        }
    }, [pinned])
    return (
        <>
            <FormField
                name='content.serviceId'
                render={({ field }) => (
                    <FormItem>
                        <FormLabel>Choose Service</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value as string}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                {
                                    services.map(service => (
                                        <SelectItem key={nanoid()} value={service.code}>{service.title}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
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

export default ServiceSubForm