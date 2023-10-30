import React, { PropsWithChildren, ReactElement, useState } from 'react'
import { Button } from '../ui/button';
import { Copy, CopyCheck } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast"


const TextCopyButton = ({
    children,
    textToCopy
}: {
    children?: ReactElement<HTMLElement>,
    textToCopy?: string
}) => {
    const [copied, setCopied] = useState<boolean>(false);
    const { toast } = useToast()
    const copy = async () => {
        if(!textToCopy) return;
        await navigator.clipboard.writeText(textToCopy);
        toast({
            title: 'Copied Successfully!',
            description: `"${textToCopy}" copied successfully`
        })
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 3000)
    }

  return (
    <>
    {
        children ? 
        React.cloneElement(children, {
            onclick: () => void copy()
        }) 
        : <Button size={'sm'} variant={'ghost'} onClick={() => void copy()}>{
            copied ? <CopyCheck className='w-3 h-3' /> : <Copy className='w-3 h-3'/>
        }</Button>
    }
    </>
  )
}

export default TextCopyButton