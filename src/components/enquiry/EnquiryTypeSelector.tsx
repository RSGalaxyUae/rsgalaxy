/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {EnquiryTypesArray} from '@/schema/EnquirySchema'
import { nanoid } from 'nanoid'

const EnquiryTypeSelector = ({
    onChange,
    value,
}: {
    onChange?: (e: any) => void,
    value?: any,
}) => {
    return (
        <Select onValueChange={onChange} defaultValue={value} >
            <SelectTrigger >
                <SelectValue placeholder="Select Enquiry Type" />
            </SelectTrigger>
            <SelectContent>
                {
                    EnquiryTypesArray.map(enq => {
                        return (
                            <SelectItem key={nanoid()} value={enq}>{enq}</SelectItem>
                        )
                    })
                }
            </SelectContent>
        </Select>
    )
}

export default EnquiryTypeSelector