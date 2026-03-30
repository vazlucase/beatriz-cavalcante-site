'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink } from 'lucide-react'

const posts = [
  {
    id: 1,
    title: 'Simplifique sua gestão em 30 dias',
    category: 'Promessa',
    type: 'Conversão',
    image: '/images/post1.jpg',
    content: 'A promessa central do método "Simplifica Social" que organiza as áreas de Empresa, Financeiro, Processos e Clientes. Mostra como o método transforma a gestão em 30 dias.',
    visual: 'Foto de estúdio da Beatriz sorrindo, usando tons terrosos (marrom), com tipografia elegante e serifada sobreposta.',
    link: 'https://www.instagram.com/p/DSFdG4njX4O'
  },
  {
    id: 2,
    title: 'Se você é social media e vive se sentindo atropelada pelos clientes, esse post é pra você.',
    category: 'Autoridade',
    type: 'Palestra',
    image: '/images/post2.jpg',
    content: 'Você já parou para pensar que o problema pode não ser a demanda, mas a falta de um método estruturado? Assim como uma empresa precisa de processos, sua gestão de atendimento também. Vamos te mostrar como organizar sua rotina e parar de apagar incêndios.',
    visual: 'Beatriz no palco, segurando um microfone, com iluminação de palco e plateia ao fundo. Transmite autoridade e conhecimento.',
    link: 'https://www.instagram.com/p/DUQTeELkbRC'
  },
  {
    id: 3,
    title: 'Uma gestora e seus livros',
    category: 'Lifestyle',
    type: 'Intelectual',
    image: '/images/post3.jpg',
    content: 'A jornada de uma gestora é feita de estudos constantes, atualização e repertório. Aqui você vê um pouco do meu momento de aprendizado e reflexão, sempre buscando as melhores referências para aplicar na minha metodologia e nos meus atendimentos.',
    visual: 'Beatriz em uma biblioteca ou livraria, ambiente aconchegante, segurando um tablet ou e-reader, rodeada por livros.',
    link: 'https://www.instagram.com/p/DRmZq_Zjdxg'
  }
]

const categories = ['Todos', 'Promessa', 'Autoridade', 'Lifestyle']

export function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('Todos')
  const [selectedPost, setSelectedPost] = useState(null)

  const filteredPosts = selectedCategory === 'Todos' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory)

  return (
    <section id="conteudo" className="py-20 bg-background">
      <div className="container-custom">
        <h2 className="text-center mb-4">Conteúdo Recente</h2>
        <p className="text-center text-text-light mb-8 max-w-2xl mx-auto">
          Estratégias, autoridade e lifestyle da minha jornada em gestão e processos
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-surface text-text-light hover:bg-accent'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid - 3 posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPost(post)}
              className="card cursor-pointer overflow-hidden group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/600x400/6B4B3E/FFFFFF?text=' + encodeURIComponent(post.title.substring(0, 30))
                  }}
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-primary">
                  {post.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full text-xs text-white">
                  {post.type}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg mb-2 line-clamp-2 group-hover:text-primary transition">
                  {post.title.length > 60 ? post.title.substring(0, 57) + '...' : post.title}
                </h3>
                <p className="text-text-light text-sm mb-3 line-clamp-3">{post.content}</p>
                <div className="flex justify-end mt-4 pt-3 border-t border-accent/30">
                  <a 
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-primary hover:text-primary-light transition text-sm font-medium"
                  >
                    <ExternalLink size={14} />
                    Acesse o post
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Post Detail */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPost(null)}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-surface rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-80 object-cover rounded-t-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://placehold.co/800/6B4B3E/FFFFFF?text=' + encodeURIComponent(selectedPost.title.substring(0, 30))
                  }}
                />
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-primary font-medium">{selectedPost.category}</span>
                  <span className="text-text-light">•</span>
                  <span className="text-primary/70 text-sm">{selectedPost.type}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl mb-4 leading-tight">{selectedPost.title}</h2>
                <p className="text-text-light leading-relaxed mb-6">{selectedPost.content}</p>
                
                <div className="bg-accent/20 p-4 rounded-lg mb-6">
                  <p className="text-sm font-semibold text-primary mb-2">🎨 Descrição Visual do Post:</p>
                  <p className="text-text-light text-sm">{selectedPost.visual}</p>
                </div>
                
                <div className="flex justify-center pt-4 border-t border-accent">
                  <a 
                    href={selectedPost.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-light transition"
                  >
                    <ExternalLink size={18} />
                    Ver post completo no Instagram
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
