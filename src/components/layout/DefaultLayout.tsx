import React, { PropsWithChildren, ReactNode } from 'react'
import DesktopNav from '../nav/DesktopNav'
import Footer from '../section/Footer'
import Link from 'next/link'


const DefaultLayout = ({
  children
}: {
  children?: ReactNode
}) => {
  return (
    <div>
      <DesktopNav />
      {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout