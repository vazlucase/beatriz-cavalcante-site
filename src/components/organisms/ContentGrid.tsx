'use client'

import { motion } from 'framer-motion'
import { FileText, Video, Podcast, BookOpen } from 'lucide-react'

const contentTypes = [
  {
    icon: FileText,
    title: 'Artigos',
    description: 'Conteúdos escritos com dicas práticas para sua rotina',
    count: 24,
    color: 'from-primary to-primary-light'
  },
  {
    icon: Video,
    title: 'Vídeos',
    description: 'Aulas e treinamentos completos sobre gestão',
    count: 15,
    color: 'from-secondary to-primary'
  },
  {
    icon: Podcast,
    title: 'Podcasts',
    description: 'Conversas inspiradoras sobre produtividade',
    count: 8,
    color: 'from-primary-light to-secondary'
  },
  {
    icon: BookOpen,
    title: 'Materiais',
    description: 'E-books, planilhas e templates exclusivos',
    count: 12,
    color: 'from-accent to-primary'
  }
]

export function ContentGrid() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <h2 className="text-center mb-4">Conteúdo Gratuito</h2>
        <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
          Acesse materiais exclusivos e comece sua jornada de transformação hoje mesmo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentTypes.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-surface rounded-xl shadow-lg overflow-hidden cursor-pointer group border border-accent/20"
            >
              <div className={`bg-gradient-to-br ${item.color} p-6 text-white`}>
                <item.icon size={48} className="mb-4" />
                <h3 className="text-2xl font-bold">{item.count}+</h3>
              </div>
              <div className="p-6">
                <h4 className="font-serif text-xl mb-2 group-hover:text-primary transition">
                  {item.title}
                </h4>
                <p className="text-text-light text-sm mb-4">{item.description}</p>
                <button className="text-primary font-semibold text-sm hover:underline">
                  Acessar conteúdo →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}