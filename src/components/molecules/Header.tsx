'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/atoms/Button'
import Link from 'next/link'

const navItems = [
  { label: 'Início', href: '/' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Conteúdo', href: '#conteudo' },
  { label: 'Contato', href: '#contato' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm dark:bg-surface/90'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="font-serif text-xl md:text-2xl font-bold text-primary">
            Beatriz Cavalcante
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-text-light hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Button href="https://wa.me/559185318798?text=Ol%C3%A1%2C%20Beatriz%20gostaria%20de%20saber%20mais%20sobre%20sua%20Gest%C3%A3o%20e%20Assist%C3%AAncia%20Virtual." variant="primary" size="md">
              Fale comigo
            </Button>
          </nav>

          <button
            className="md:hidden p-2 focus-ring"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-surface shadow-lg animate-slideDown">
            <nav className="flex flex-col p-4 gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-text-light hover:text-primary py-2 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button href="https://wa.me/559185318798?text=Ol%C3%A1%2C%20Beatriz%20gostaria%20de%20saber%20mais%20sobre%20sua%20Gest%C3%A3o%20e%20Assist%C3%AAncia%20Virtual." variant="primary" size="md" fullWidth>
                Fale comigo
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}