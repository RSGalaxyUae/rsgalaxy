import React, { type PropsWithChildren, type ReactNode } from 'react'
import Logo from '../shared/Logo'
import Link from 'next/link'
import { services } from '@/data/Services'
import { nanoid } from 'nanoid'
import { Button } from '../ui/button'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import { Separator } from '../ui/separator'



const FooterTitle = (props: PropsWithChildren) => {
    return <h3 className='tracking-widest uppercase text-primary/70 mb-5'>{props.children}</h3>
}

const FooterLink = ({
    href,
    children
}: {
    href?: string,
    children?: ReactNode
}) => {
    return <Link className='text-white hover:text-white/50 flex' href={href ?? '#'}>{children}</Link>
}

const Footer = () => {
    return (
        <footer className='bg-black text-white'>
            <div className='py-10'>
                <div className='flex items-center justify-center'>
                    <Logo />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center pb-10 px-5">
                <div className='max-w-xs'>
                    <FooterTitle>Address</FooterTitle>
                    <div className='flex gap-3'>
                        <span className='text-gray-500'>Address</span>
                        <span>15th Floor, Dusit Thani Complex, Offices Building, Sultan Bin Zayed The First St (Muroor road), Opposite Al Jazira Club, P.O. Box. 2286, Abu Dhabi, U.A.E.</span>
                    </div>

                    <div className="flex gap-3">
                        <span className='text-gray-500'>Phone</span>
                        <span> +971 2 207 2333</span>
                    </div>

                    <div className="flex gap-3">
                        <span className='text-gray-500'>Email</span>
                        <span>rsgalaxyuae@gmail.com</span>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div>
                        <FooterTitle>Company</FooterTitle>
                        <div>
                            <FooterLink>About Us</FooterLink>
                            <FooterLink>Clients</FooterLink>
                            <FooterLink>Enquiries</FooterLink>
                            <FooterLink>Careers</FooterLink>
                            <FooterLink>Contact Us</FooterLink>
                        </div>
                    </div>

                    <div>
                        <FooterTitle>Our Solutions</FooterTitle>

                        {
                            services.map(ser => {
                                return <FooterLink key={nanoid()}>{ser.title}</FooterLink>
                            })
                        }
                    </div>
                </div>

                <div className='w-full'>
                    {/* <FooterTitle>Follow Us</FooterTitle> */}
                    <div className='flex gap-3 justify-evenly md:justify-center w-full'> 
                        <Button size={'icon'}><FacebookIcon /></Button>
                        <Button size={'icon'}><InstagramIcon /></Button>
                        <Button size={'icon'}><LinkedinIcon /></Button>
                    </div>
                </div>
            </div>
            <Separator />
            <div className='py-5 flex items-center justify-center '>
                <p>All rights reserverd  </p>
            </div>
        </footer>
    )
}

export default Footer