import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Kişisel portföy sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <body className="relative">
        {/* Neon accent elements */}
        <div className="neon-accent"></div>
        <div className="neon-accent"></div>
        <div className="neon-accent"></div>
        
        <Navbar />
        <main className="min-h-screen pt-20 relative z-10">{children}</main>
        <Footer /> 
      </body>
    </html>
  )
}