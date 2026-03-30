import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(3, 'Nome muito curto'),
  email: z.string().email('Email inválido'),
  message: z.string().min(10, 'Mensagem muito curta')
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validated = contactSchema.parse(body)
    
    // Aqui você integraria com email service (Resend, SendGrid, etc.)
    console.log('Contato recebido:', validated)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Mensagem enviada com sucesso!' 
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ 
        success: false, 
        errors: error.errors 
      }, { status: 400 })
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Erro interno do servidor' 
    }, { status: 500 })
  }
}