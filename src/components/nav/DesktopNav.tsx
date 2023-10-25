import React, { PropsWithChildren, ReactNode } from 'react'
import Logo from '../shared/Logo'
import { NavigationMenu, NavigationMenuList, navigationMenuTriggerStyle, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent, } from '../ui/navigation-menu'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Card, CardContent } from '../ui/card'
import { services } from '@/data/Services'
import { nanoid } from 'nanoid'
import { Button } from '../ui/button'
import { FacebookIcon, InstagramIcon, LinkedinIcon, MenuIcon, PhoneCallIcon } from 'lucide-react'
import MobileNav from './MobileNav'

type NavLinkProps = {
  children?: React.ReactNode;
} & (
    | { asTrigger: true; href?: never }
    | { asTrigger?: false; href: string }
  );


type NavItemProps = {
  image?: string,
  title: string,
  href?: string,
  description?: string
}

const NavItem = ({
  image,
  title,
  href,
  description
}: NavItemProps) => {
  const router = useRouter();
  const wrapperClass = 'p-2 rounded-lg overflow-hidden bg-card hover:bg-primary/5 transition-all text-card-foreground hover:text-primary';
  const Wrapper = (props: PropsWithChildren) => {
    return (
      <>
        {
          href ? <Link href={href} className={cn(['block', wrapperClass, { 'hover:bg-primary/5 hover:text-primary': router.pathname === href }])}>{props.children}</Link> : <div className={wrapperClass}>{props.children}</div>
        }
      </>
    )
  }

  return (
    <Wrapper>
      <div className={cn([
        { 'grid grid-cols-[.7fr_1fr] gap-3': image }
      ])}>
        {
          image && <div className='rounded-md overflow-hidden'><Image src={image} width={640} height={426} alt={title} /></div>
        }

        <div className='space-y-1'>
          <h3 className='font-bold tracking-widest text-sm'>{title}</h3>
          <p className='line-clamp-3 text-sm text-muted-foreground'>{description}</p>
        </div>
      </div>
    </Wrapper>
  )


}

const NavLink = ({
  children,
  href,
  asTrigger = false
}: NavLinkProps) => {
  const router = useRouter()


  if (href && !asTrigger) {
    return (
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={cn([
          navigationMenuTriggerStyle(),
          'tracking-widest uppercase',
          { 'text-primary hover:text-primary focus:text-primary': router.asPath === href }
        ])}>
          {children}
        </NavigationMenuLink>
      </Link>
    )
  }

  return (
    <NavigationMenuTrigger

      className={cn([
        navigationMenuTriggerStyle(),
        'tracking-widest uppercase',
        { 'text-primary hover:text-primary': router.asPath === href }
      ])}
    >{children}</NavigationMenuTrigger>
  )
}


const Menu = () => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavLink href='/'>Home</NavLink>
        </NavigationMenuItem>

        <NavigationMenuItem className=''>
          <NavLink asTrigger>Services</NavLink>

          <NavigationMenuContent className='w-[400px] md:w-[80vw] z-50' >
            <div className=" p-5 max-h-screen overflow-y-auto">
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2 lg:gap-5'>
                {
                  services.map(service => {
                    return <NavItem key={nanoid()} {...service} />
                  })
                }
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavLink href='/about'>About</NavLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavLink href='/contact'>Contact</NavLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const DesktopNav = () => {
  return (
    <nav className='flex items-center px-5 py-3 z-50 relative justify-between'>
      <div className=' flex items-center gap-10'>
        <Logo />
        <div className='hidden md:block'><Menu /></div>
      </div>
      <div className=' block md:hidden'>
        <MobileNav
        trigger={<Button variant={'outline'} size={'icon'}><MenuIcon/></Button>} 
         />
      </div>
      <div className=' items-center gap-2 hidden md:flex'>
        <Button className='space-x-2'><PhoneCallIcon /> <span>+971 2345678902</span></Button>
        <div className='flex gap-3'>
          <Button size={'icon'}><FacebookIcon /></Button>
          <Button size={'icon'}><InstagramIcon /></Button>
          <Button size={'icon'}><LinkedinIcon /></Button>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNav