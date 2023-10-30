import EnquiryForm from '@/components/enquiry/EnquiryForm';
import PageHeader from '@/components/shared/PageHeader'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type GeneralSettingOutput } from '@/schema/settingSchema';
import { api } from '@/utils/api'
import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { FacebookIcon, LocateIcon, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import React, { type ReactNode } from 'react'


const CCard = ({
    title,
    icon,
    children
}: {
    title: string,
    icon: ReactNode,
    children?: ReactNode
}) => {
    return <Card className='border border-primary max-w-sm w-full rounded-none shadow-lg shadow-primary/10'>
        <CardHeader >
            <div className='flex items-center justify-center '>
                {icon}
            </div>
        </CardHeader>

        <CardContent className='space-y-3'>
            <CardTitle className='text-base text-center'>{title}</CardTitle>
            <CardDescription className='text-center'>{children}</CardDescription>
        </CardContent>
    </Card>
}

const ContactPage = () => {
    const { data, isLoading } = api.setting.get.useQuery<GeneralSettingOutput>({ type: 'GENERAL_SETTING' });
    return (
        <>
            <PageHeader title="Contact Us" image="/assets/images/contact-us-cover.jpg" />
            <section className='py-20 '>
                <div className="grid grid-cols-1 justify-items-center md:grid-cols-3 container mx-auto">
                    <CCard title="Email" icon={<Mail className='w-10 h-10 text-primary'/>}>{data?.value.contact?.email}</CCard>
                    <CCard title="Phone" icon={<Phone className='w-10 h-10 text-primary'/>}>{data?.value.contact?.phone}</CCard>
                    <CCard title="Address" icon={<LocateIcon className='w-10 h-10 text-primary'/>}>{`${data?.value.contact?.address}, ${data?.value.contact?.city}, ${data?.value.contact?.country}, (${data?.value.contact?.pincode})`}</CCard>
                </div>
            </section>

            <section className='mb-20'>
                <div className="max-w-2xl mx-auto">
                    <EnquiryForm type="SERVICE"/>

                    <div className="flex items-center justify-center pt-10 gap-5">
                        <Link href={data?.value.socialLinks?.facebook ?? '#'} ><Button disabled={!Boolean(data?.value.socialLinks?.facebook)} ><FacebookIcon className='w-4 h-4'/></Button></Link>
                        <Link href={data?.value.socialLinks?.twitter ?? '#'}><Button disabled={!Boolean(data?.value.socialLinks?.twitter)} ><TwitterLogoIcon/></Button></Link>
                        <Link href={data?.value.socialLinks?.instagram ?? '#'} ><Button disabled={!Boolean(data?.value.socialLinks?.instagram)} ><InstagramLogoIcon/></Button></Link>
                        <Link href={data?.value.socialLinks?.linkedIn ?? '#'}><Button disabled={!Boolean(data?.value.socialLinks?.linkedIn)} ><LinkedInLogoIcon/></Button></Link>
                    </div>
                </div>
            </section>


            <div className=''></div>
        </>
    )
}

export default ContactPage