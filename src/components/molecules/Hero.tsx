'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/atoms/Button'

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">
              Organize seus processos.
              <br />
              <span className="text-primary">Tire planos do papel.</span>
            </h1>
            <p className="text-lg md:text-xl text-text-light mb-8 leading-relaxed">
              Mentoria para mulheres que buscam produtividade e gestão real.
              Te ajudo a transformar caos em resultados.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="https://wa.me/559185318798?text=Ol%C3%A1%2C%20Beatriz%20gostaria%20de%20saber%20mais%20sobre%20sua%20Gest%C3%A3o%20e%20Assist%C3%AAncia%20Virtual." variant="primary" size="lg">
                Quero organizar meus processos
              </Button>
              <Button href="#conteudo" variant="secondary" size="lg">
                Ver conteúdo gratuito
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-accent/30">
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">2.224</span>
                  <span className="text-text-light">+</span>
                </div>
                <p className="text-sm text-text-light mt-1">Seguidores</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">444</span>
                </div>
                <p className="text-sm text-text-light mt-1">Seguindo</p>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">87%</span>
                  <span className="text-text-light">+</span>
                </div>
                <p className="text-sm text-text-light mt-1">Mais organização</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/beatriz-hero.jpg"
                alt="Beatriz Cavalcante"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/800x600/6B4B3E/FFFFFF?text=Beatriz+Cavalcante'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}