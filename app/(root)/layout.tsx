"use client"

import StreamVideoProvider from "@/providers/StreamClientProvider"
import { ReactNode } from "react"

const RootLayout = ({children} : {children: ReactNode}) => {
  return (
    <main className='relative'>
      <StreamVideoProvider>
      {children}
      </StreamVideoProvider>
    </main>
  )
}

export default RootLayout