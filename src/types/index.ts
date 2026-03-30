export interface Highlight {
  icon: string
  label: string
  content: string
}

export interface FeedPost {
  id: number
  title: string
  category: 'Educativo' | 'Prova Social' | 'Lifestyle'
  image: string
  content: string
  likes: number
  comments: number
  date: string
}

export interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
  image: string
  date: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}