'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Ana Carolina Silva',
    role: 'CEO - TechStart',
    content: 'A Beatriz transformou completamente minha forma de trabalhar. Hoje sou 3x mais produtiva e consigo equilibrar minha vida pessoal e profissional.',
    rating: 5,
    image: '/images/testimonial1.jpg',
    date: 'Janeiro 2024'
  },
  {
    id: 2,
    name: 'Mariana Santos',
    role: 'Gestora de Projetos',
    content: 'Metodologia incrível que realmente funciona. Em 30 dias já via resultados visíveis na minha organização diária.',
    rating: 5,
    image: '/images/testimonial2.jpg',
    date: 'Dezembro 2023'
  },
  {
    id: 3,
    name: 'Fernanda Lima',
    role: 'Empresária',
    content: 'A mentoria da Beatriz foi o divisor de águas no meu negócio. Processos que levavam horas agora são feitos em minutos.',
    rating: 5,
    image: '/images/testimonial3.jpg',
    date: 'Novembro 2023'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-accent/20">
      <div className="container-custom">
        <h2 className="text-center mb-4">O que dizem minhas clientes</h2>
        <p className="text-center text-text-light mb-12 max-w-2xl mx-auto">
          Histórias reais de mulheres que transformaram seus processos e alcançaram resultados extraordinários
        </p>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-surface rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-text-light text-lg md:text-xl leading-relaxed text-center mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden bg-gray-200">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/6B4B3E/FFFFFF?text=User'
                    }}
                  />
                </div>
                <p className="font-bold text-primary text-lg">{testimonials[currentIndex].name}</p>
                <p className="text-text-light text-sm">{testimonials[currentIndex].role}</p>
                <p className="text-text-light text-xs mt-2">{testimonials[currentIndex].date}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-surface shadow-lg p-2 rounded-full hover:bg-accent transition"
          >
            <ChevronLeft size={24} className="text-primary" />
          </button>

          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-surface shadow-lg p-2 rounded-full hover:bg-accent transition"
          >
            <ChevronRight size={24} className="text-primary" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-8 bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}