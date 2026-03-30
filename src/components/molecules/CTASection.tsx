'use client'

import { Button } from '@/components/atoms/Button'
import { motion } from 'framer-motion'

export function CTASection() {
  return (
    <section id="contato" className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Pronta para organizar seus processos?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma conversa e descubra como posso te ajudar a tirar planos do papel.
          </p>
          <Button 
            href="https://wa.me/559185318798?text=Ol%C3%A1%2C%20Beatriz%20gostaria%20de%20saber%20mais%20sobre%20sua%20Gest%C3%A3o%20e%20Assist%C3%AAncia%20Virtual." 
            variant="secondary" 
            size="lg"
          >
            Quero começar agora →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}