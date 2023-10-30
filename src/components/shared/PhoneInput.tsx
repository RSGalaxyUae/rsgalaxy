/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
// import PI from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Loader2Icon } from 'lucide-react';


const PI = dynamic(() => import('react-phone-input-2'), {loading: (prop) => <Loader2Icon className='animate-spin w-6 h-6' />});

export type PhoneInputProps = {
    onChange?: (value: string) => void,
    value?: string
}

const PhoneInput = ({ value, onChange }: PhoneInputProps) => {

    return (
        <PI
            country={'ae'}
            value={value}
            onChange={phone => onChange?.(phone)}
            inputStyle={{width: '100%'}}
        />
    )
}

export default PhoneInput