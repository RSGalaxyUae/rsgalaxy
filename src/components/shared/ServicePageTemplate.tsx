import React, { ReactNode } from 'react'
import PageHeader from './PageHeader'
import Square from './Square'
import { SectionDescription, SectionTitle } from '../ui/Typography'
import { nanoid } from 'nanoid'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type ServicePageTemplateProps = {
  serviceTitle: string,
  image: string,
  contentTitle?: string,
  contentDesc?: ReactNode,
  offeredServices?: Record<string, string[]> | string[],
  children?: ReactNode
}


export const SubServiceTitle = React.forwardRef<React.HTMLAttributes<HTMLHeadingElement>, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => {
    return <h3 className={cn([
      'font-bold text-lg mb-3',
      className
    ])} {...props} />
  }
)


SubServiceTitle.displayName = 'SubServiceTitle'

export const SubServiceList = React.forwardRef<React.HTMLAttributes<HTMLUListElement>, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => {
    return <ul className={cn([
      'bg-white grid grid-cols-1 md:grid-cols-2 p-5 md:p-10 gap-3  border-[1px] border-primary/20',
      className
    ])} {...props} />
  }
)
SubServiceList.displayName = 'SubServiceList';

export const SubServiceListItem = React.forwardRef<React.HTMLAttributes<HTMLLIElement>, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, children, ...props }, ref) => {
    return <li key={nanoid()} className='flex items-start gap-3 text-muted-foreground ' {...props}>
      <span>
        <ChevronRight className='text-primary w-6 h-6' />
      </span>
      <span className=''>{children}</span>
    </li>
  }
)
SubServiceListItem.displayName = 'SubServiceListItem';



const ServicePageTemplate = ({
  serviceTitle,
  image,
  contentTitle,
  contentDesc,
  offeredServices,
  children
}: ServicePageTemplateProps) => {
  return (
    <>
      <PageHeader title={serviceTitle} />

      <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 items-center'>
        <div className='flex items-center justify-center'>
          <div className="max-w-2xl space-y-3 py-10">
            <Square />
            <SectionTitle>{contentTitle}</SectionTitle>
            <SectionDescription className='pt-5'>
             {contentDesc}
            </SectionDescription>
          </div>
        </div>
        <div className=''>
          <Image src={image} alt={serviceTitle} width={1000} height={500} />
        </div>
      </div>


      <section className='bg-primary/5 py-20'>
        <div className="max-w-6xl mx-auto">
          {
            Array.isArray(offeredServices) ?
              <SubServiceList>
                {
                  offeredServices.map(ss => (
                    <SubServiceListItem key={nanoid()} >{ss}</SubServiceListItem>
                  ))
                }
              </SubServiceList>
              : offeredServices ? Object.entries(offeredServices).map(([key, value]) => (
                <div key={nanoid()} className='mb-10'>
                  <SubServiceTitle className='mb-3'>{key}</SubServiceTitle>
                  <SubServiceList>
                    {
                      value.map(ss => (
                        <SubServiceListItem key={nanoid()} >{ss}</SubServiceListItem>
                      ))
                    }
                  </SubServiceList>
                </div>
              ))

                : <div></div>
          }
        </div>
      </section>


      {children}
    </>
  )
}



export default ServicePageTemplate