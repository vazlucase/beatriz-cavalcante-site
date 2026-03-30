import type { Metadata } from 'next'
import { Inter, Playfair_Display, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/atoms/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'], 
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Beatriz Cavalcante | Treinadora de Processos',
  description: 'Te ajudo a organizar seus processos e tirar planos do papel.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-text antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}