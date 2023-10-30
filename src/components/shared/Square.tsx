import { cn } from '@/lib/utils';
import React from 'react'

const Square = React.forwardRef<React.HTMLAttributes<HTMLSpanElement>, React.HTMLAttributes<HTMLSpanElement>>(
    ({ className, ...props }, ref) => {
        return <span
            {...props}
            className={cn([
                'border-[5px] border-primary w-8 h-8 shrink-0 block',
                className
            ])}
        />
    }
)

Square.displayName = 'Square';

export default Square