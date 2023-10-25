import { Target } from 'lucide-react'
import React, { ReactNode } from 'react'
import { CardDescription, CardTitle } from '../ui/card'

const FeatureCard = ({
    title,
    desc,
    icon,
}: {
    title: string,
    desc?: string,
    icon?: ReactNode
}) => {
    return (
        <div className='max-w-xs  hover:border-primary transition-all p-5'>
            <div className='py-5 flex items-center'>
                {icon}
            </div>
            <div className=' space-y-5'>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{desc}</CardDescription>
            </div>
        </div>
    )
}

export default FeatureCard