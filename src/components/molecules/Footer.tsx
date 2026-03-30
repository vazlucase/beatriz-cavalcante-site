import { Instagram, Linkedin, Youtube, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Coluna 1 - Sobre */}
          <div>
            <h3 className="font-serif text-2xl mb-4">Beatriz Cavalcante</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Te ajudo a organizar seus processos e tirar planos do papel. 
              Mentoria para mulheres que buscam produtividade e gestão real.
            </p>
          </div>
          
          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-white transition">Início</Link></li>
              <li><Link href="#sobre" className="text-white/80 hover:text-white transition">Sobre</Link></li>
              <li><Link href="#conteudo" className="text-white/80 hover:text-white transition">Conteúdo</Link></li>
              <li><Link href="#contato" className="text-white/80 hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          
          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-white/80">
                <Mail size={16} /> beatrizcavalcantev@gmail.com
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <Phone size={16} /> (91) 98531-8798
              </li>
            </ul>
          </div>
          
          {/* Coluna 4 - Redes Sociais */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/beatriz.cavalcanteav" target="_blank" rel="noopener noreferrer" 
                 className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <Instagram size={20} />
              </a>
              <a href="link" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <Linkedin size={20} />
              </a>
              <a href="link" target="_blank" rel="noopener noreferrer"
                 className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>© 2024 Beatriz Cavalcante. Todos os direitos reservados.</p>
          <p className="mt-2">
            <Link href="/politica-privacidade" className="hover:text-white transition">Política de Privacidade</Link>
            {' | '}
            <Link href="/termos" className="hover:text-white transition">Termos de Uso</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}