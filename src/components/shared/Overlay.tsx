import { cn } from '@/lib/utils'
import React from 'react'

const Overlay = React.forwardRef<React.HTMLAttributes<HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>(
    ({className, ...props}, ref) => {
        return <div className={cn([
            'absolute top-0 left-0 w-full h-full bg-primary/30',
            className
        ])} {...props} />
    }
)

Overlay.displayName = "Overlay"

export default Overlay