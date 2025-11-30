import { Inter, Poppins } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

// Fontları configure et
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: 'Şevval Nur Kibar',
  description: 'Kişisel portföy sitesi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <body className="relative font-inter transition-colors duration-300 bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider>
          {/* Subtle accent elements */}
          <div className="subtle-accent"></div>
          <div className="subtle-accent"></div>
          <div className="subtle-accent"></div>
          
          <Navbar />
          <main className="min-h-screen pt-10 relative z-10">{children}</main>
          <Footer /> 
        </ThemeProvider>
      </body>
    </html>
  )
}