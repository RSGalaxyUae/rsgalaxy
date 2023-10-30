import { useRouter } from 'next/router'
import React, { PropsWithChildren } from 'react'
import AdminLayout from './AdminLayout';
import DefaultLayout from './DefaultLayout';

const Layout = ({children}: PropsWithChildren) => {
  const router = useRouter();


  if(router.asPath.startsWith('/admin')){
    return <AdminLayout>{children}</AdminLayout>
  }
  
  return (
    <DefaultLayout>{children}</DefaultLayout>
  )
}

export default Layout