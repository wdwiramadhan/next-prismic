import Footer from './footer'
import Meta from './meta'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}
export default function Layout({ children }:Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}