import React, { type PropsWithChildren, type ReactNode } from 'react'
import Logo from '../shared/Logo'
import Link from 'next/link'
import { services } from '@/data/Services'
import { nanoid } from 'nanoid'
import { Button } from '../ui/button'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-react'
import { Separator } from '../ui/separator'
import { api } from '@/utils/api'
import { GeneralSettingOutput } from '@/schema/settingSchema'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'



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
    const { data, isLoading } = api.setting.get.useQuery<GeneralSettingOutput>({ type: 'GENERAL_SETTING' });
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
                        <span>{``}</span>
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
                            <FooterLink href='/about'>About Us</FooterLink>
                            <FooterLink href="#">Clients</FooterLink>
                            <FooterLink href="#">Enquiries</FooterLink>
                            <FooterLink href="#">Careers</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                        </div>
                    </div>

                    <div>
                        <FooterTitle>Our Solutions</FooterTitle>

                        {
                            services.map(ser => {
                                return <FooterLink key={nanoid()} href={ser.href}>{ser.title}</FooterLink>
                            })
                        }
                    </div>
                </div>

                <div className='w-full'>
                    {/* <FooterTitle>Follow Us</FooterTitle> */}
                    <div className='flex gap-3 justify-evenly md:justify-center w-full'> 
                    <Link href={data?.value.socialLinks?.facebook ?? '#'} ><Button disabled={!Boolean(data?.value.socialLinks?.facebook)} ><FacebookIcon className='w-4 h-4'/></Button></Link>
                        <Link href={data?.value.socialLinks?.twitter ?? '#'}><Button disabled={!Boolean(data?.value.socialLinks?.twitter)} ><TwitterLogoIcon/></Button></Link>
                        <Link href={data?.value.socialLinks?.instagram ?? '#'} ><Button disabled={!Boolean(data?.value.socialLinks?.instagram)} ><InstagramLogoIcon/></Button></Link>
                        <Link href={data?.value.socialLinks?.linkedIn ?? '#'}><Button disabled={!Boolean(data?.value.socialLinks?.linkedIn)} ><LinkedInLogoIcon/></Button></Link>
                    </div>
                </div>
            </div>
            <Separator />
            <div className='py-5 flex items-center justify-center '>
                <p>{`Copyright ${new Date(Date.now()).getFullYear()}`}, RSGalaxy, All rights reserverd </p>
            </div>
        </footer>
    )
}

export default Footer