'use client'

import { motion } from 'framer-motion'
import { Award, Users, Clock, Target } from 'lucide-react'

export function BioCard() {
  return (
    <section id="sobre" className="py-20 bg-white dark:bg-surface">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/beatriz-bio.jpg"
                alt="Beatriz Cavalcante"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x1000/6B4B3E/FFFFFF?text=Beatriz+Cavalcante'
                }}
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-4">
              Quem é Beatriz Cavalcante?
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              Sou especialista em gestão de processos e produtividade, com mais de 10 anos de experiência 
              ajudando mulheres a transformarem seus negócios e carreiras através de métodos práticos e eficientes.
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              Minha missão é mostrar que organização não é dom, é técnica. E com as ferramentas certas, 
              qualquer mulher pode tirar seus planos do papel e alcançar resultados extraordinários.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Users className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">500+</p>
                  <p className="text-sm text-text-light">Clientes atendidas</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Clock className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">10+</p>
                  <p className="text-sm text-text-light">Anos de experiência</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Target className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">98%</p>
                  <p className="text-sm text-text-light">De aprovação</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-accent p-3 rounded-full">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <p className="font-bold text-2xl text-primary">15+</p>
                  <p className="text-sm text-text-light">Palestras realizadas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
