'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, MessageCircle, Heart, Calendar, Star, Shield } from 'lucide-react'

const highlights = [
  { icon: Users, label: 'Família', content: 'Como equilibrar vida profissional e familiar com organização real.' },
  { icon: MessageCircle, label: 'Feedback', content: 'A importância do feedback estruturado na sua rotina.' },
  { icon: Heart, label: 'Comunidade', content: 'Nossa comunidade de mulheres que transformam processos.' },
  { icon: Calendar, label: 'Rotina', content: 'Métodos práticos para organizar sua semana produtivamente.' },
  { icon: Star, label: 'Minha Vida', content: 'Um pouco sobre minha jornada e aprendizados.' },
  { icon: Shield, label: 'Ética', content: 'Meus valores e compromisso com resultados éticos.' },
]

export function Highlights() {
  const [selected, setSelected] = useState(null)

  return (
    <section className="py-16 bg-accent/20">
      <div className="container-custom">
        <h2 className="text-center mb-12">Destaques</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {highlights.map((item, index) => (
            <motion.button
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelected(index)}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                <div className="w-full h-full rounded-full bg-white dark:bg-surface flex items-center justify-center group-hover:bg-accent transition-colors">
                  <item.icon size={32} className="text-primary" />
                </div>
              </div>
              <span className="text-sm font-medium text-text">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-surface rounded-2xl max-w-md w-full p-6 relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
              >
                <X size={20} />
              </button>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                  {React.createElement(highlights[selected].icon, { size: 32, className: 'text-white' })}
                </div>
                <h3 className="text-2xl font-serif mb-3">{highlights[selected].label}</h3>
                <p className="text-text-light leading-relaxed">
                  {highlights[selected].content}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
