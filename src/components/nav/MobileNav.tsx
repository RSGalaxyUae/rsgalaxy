import React, { ReactNode } from 'react'
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

import Logo from '../shared/Logo'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { useRouter } from 'next/router'
import { Button } from '../ui/button'
import { ChevronDownIcon, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import { services } from '@/data/Services'
import { nanoid } from 'nanoid'


const NavItem = ({
    href,
    children
}: {
    href?: string,
    children?: ReactNode
}) => {
    const router = useRouter()
    return (
        <Link className={cn([
            navigationMenuTriggerStyle(),
            'tracking-widest uppercase w-full justify-start',
            { 'text-primary hover:text-primary focus:text-primary bg-secondary': router.asPath === href }
        ])} href={href ?? '#'}>{children}</Link>
    )
}

const MobileNav = ({
    trigger
}: {
    trigger: ReactNode
}) => {

    return (
        <Sheet >
            <SheetTrigger asChild>{trigger}</SheetTrigger>
            <SheetContent className='w-3/4 md:w-96'>
                <SheetHeader>
                    <Logo />
                </SheetHeader>

                <div className='mt-5 '>
                    <NavItem href='/'>Home</NavItem>
                    <Collapsible>
                        <CollapsibleTrigger asChild>
                            <Button className='justify-between w-full uppercase' variant={'ghost'} ><span>Services</span> <ChevronDownIcon className='w-4 h-4' /></Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            <div className='px-2 spay'>
                                {
                                    services.map(service => {
                                        return <NavItem key={nanoid()} href={service.href}>{service.title}</NavItem>
                                    })
                                }
                            </div>
                        </CollapsibleContent>
                    </Collapsible>

                    <NavItem href='/about'>About</NavItem>
                    <NavItem href='/contact'>Contact</NavItem>
                    <NavItem href='/docs'>Documents</NavItem>
                </div>

                {/* <div>
                    <div className='flex gap-3'>
                        <Button size={'icon'}><FacebookIcon /></Button>
                        <Button size={'icon'}><InstagramIcon /></Button>
                        <Button size={'icon'}><LinkedinIcon /></Button>
                    </div>
                </div> */}
                 {/* <SheetFooter>
                <div className='flex gap-3'>
                    <Button size={'icon'}><FacebookIcon /></Button>
                    <Button size={'icon'}><InstagramIcon /></Button>
                    <Button size={'icon'}><LinkedinIcon /></Button>
                </div>
            </SheetFooter> */}
            </SheetContent>
           
        </Sheet>
    )
}

export default MobileNav