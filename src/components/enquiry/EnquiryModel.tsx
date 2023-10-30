import React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '../ui/button'



const EnquiryModel = ({
  isOpen,
  onClose,
  trigger,
  form,
  title
}: {
  isOpen: boolean;
  onClose: () => void;
  trigger: React.ReactNode;
  form: React.ReactNode;
  title?: string
}) => {
  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            {
              title && <DialogTitle>{title}</DialogTitle>
            }
          </DialogHeader>

          <div>{form}</div>
        </DialogContent>
      </Dialog>

    </>
  )
}

export default EnquiryModel