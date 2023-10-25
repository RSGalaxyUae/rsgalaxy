
import { cn } from '@/lib/utils'
import React from 'react'

const Typography = () => {
  return (
    <div>Typography</div>
  )
}

const SectionTitle = React.forwardRef<React.HTMLAttributes<HTMLHeadingElement>, React.HTMLAttributes<HTMLHeadingElement>>(
    ({className, ...props}, ref) => {
        return <h1 className={cn([
            'text-3xl md:text-4xl font-bold',
            className
        ])} {...props} />
    }
)
SectionTitle.displayName = 'SectionTitle';

const SectionDescription = React.forwardRef<React.HTMLAttributes<HTMLParagraphElement>, React.HTMLAttributes<HTMLParagraphElement>>(
    ({className, ...props}, ref) => {
        return <h1 className={cn([
            'text-lg leading-relaxed tracking-wider text-muted-foreground',
            className
        ])} {...props} />
    }
)
SectionDescription.displayName = 'SectionDescription';



export {Typography, SectionTitle, SectionDescription}