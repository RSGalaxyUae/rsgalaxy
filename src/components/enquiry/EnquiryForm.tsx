/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CreateEnquirySchema, type CreateEnquiryInput, type EnquiryTypes, type UpdateEnquiryInput } from '@/schema/EnquirySchema'
import React, { type ReactNode } from 'react'
import { useForm, type UseFormReturn } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import PhoneInput from '../shared/PhoneInput';
import { Button } from '../ui/button';
import GeneralSubForm from './GeneralSubForm';
import ServiceSubForm from './ServiceSubForm';
import { useToast } from '../ui/use-toast';
import { api } from '@/utils/api';


const TypeSubFomMap: Record<EnquiryTypes, ReactNode> = {
    'GENERAL': <GeneralSubForm />,
    'SERVICE': <ServiceSubForm />
}

const EnquiryForm = ({
    type,
    children,
    title,
    className,
    onDone
}: {
    type: EnquiryTypes,
    children?: (props: { form: UseFormReturn<CreateEnquiryInput | UpdateEnquiryInput> }) => ReactNode,
    title?: string,
    className?: string,
    onDone?: () => void
}) => {
    
    const {data, isLoading, mutateAsync} = api.enquiry.create.useMutation()
    const form = useForm<CreateEnquiryInput>({
        resolver: zodResolver(CreateEnquirySchema),
        defaultValues: {type},
    })
    const {toast} = useToast()

    const save = async (value: CreateEnquiryInput) => {
        try {
            const res = await mutateAsync(value);
            toast({
                title: 'Request submitted succefully!'
            });
            form.reset({...form.formState.defaultValues});
            onDone?.();

        } catch (error) {
            toast({
                variant: 'destructive', 
                title: 'Submission failed. Please try again later'
            });

        }
    }

    const onSubmit = (value: any) => {
        // console.log({ value })
        void save(value);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
                <FormField
                    name='name'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Eg: shivam singh' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name='email'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder='Eg: shivam@example.com' {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    name='phone'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                                <PhoneInput {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {children ? children?.({ form }) : TypeSubFomMap?.[type]}

                <div className='flex justify-center pt-3'>
                    <Button type='submit' >Submit</Button>
                </div>
            </form>
        </Form>
    )
}

export default EnquiryForm