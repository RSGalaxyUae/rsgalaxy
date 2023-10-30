/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from '@/utils/api'
import { Enquiry } from '@prisma/client'
import React from 'react'
import { useToast } from '../ui/use-toast'

const DeleteEnquiry = ({
    enquiry,
    children
}: {
    enquiry: Enquiry,
    children?: any
}) => {
    const deleteEnquiryMutation = api.enquiry.delete.useMutation();
    const ctx = api.useContext()
    const { toast } = useToast();


    const deleteEnquiry = async () => {
        if (deleteEnquiryMutation.isLoading) return;
        try {
            const res = await deleteEnquiryMutation.mutateAsync({ id: enquiry.id });
            await ctx.enquiry.invalidate();
            toast({ title: 'Enquiry deleted successfully!' })
        } catch (error) {
            toast({
                title: 'Problem when deleting enquiry',
                variant: 'destructive'
            });
        }
    }


    return (
        <span onClick={() => void deleteEnquiry()}>{children}</span>
    )
}

export default DeleteEnquiry