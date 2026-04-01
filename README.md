# 🚀 Beatriz Cavalcante | Treinadora de Processos

![Banner do Projeto](public/images/banner.png)

[![Licença](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]()

## 📖 Sobre o Projeto

**Beatriz Cavalcante | Treinadora de Processos** é um site profissional desenvolvido para apresentar os serviços de mentoria em gestão e produtividade. O projeto tem como objetivo criar uma presença online moderna e eficiente para a profissional, destacando seus serviços, metodologia e formas de contato.

Desenvolvi este projeto com o objetivo de aprimorar habilidades em **Next.js 15 com App Router**, **TypeScript** e animações fluidas com **Framer Motion**, entregando uma experiência de usuário performática e visualmente atraente.

> "Organização e processos eficientes são a base de uma gestão de sucesso."

---

## 🎯 Funcionalidades

- ✅ **Design Responsivo** — Interface adaptada para todos os tamanhos de tela (mobile, tablet e desktop)
- ✅ **Animações Suaves** — Transições e efeitos visuais utilizando Framer Motion
- ✅ **Formulário de Contato** — Validação robusta com React Hook Form + Zod
- ✅ **Performance Otimizada** — Construído com Next.js 15, garantindo carregamento rápido e SEO
- 🔄 **Integração com Email** — Em desenvolvimento para envio automático de mensagens

---

## 🛠️ Tecnologias Utilizadas

| Camada | Tecnologias |
|--------|-------------|
| **Frontend** | React, Next.js 15 (App Router), TypeScript, TailwindCSS, Framer Motion |
| **Validação** | React Hook Form, Zod |
| **Estilização** | Tailwind CSS, PostCSS |
| **Deploy** | Vercel, Docker |
| **Ferramentas** | ESLint, Prettier, Git |

---

## 📸 Demonstração

<p align="center">
  <img src="public/images/screenshot-1.png" width="45%" alt="Página Inicial" />
  <img src="public/images/screenshot-2.png" width="45%" alt="Seção de Serviços" />
</p>

🎥 **Demo ao vivo:** [clique aqui para ver o projeto rodando](https://beatriz-cavalcante-site.vercel.app)

---

## 🚀 Como Executar Localmente

### Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- Node.js (v18 ou superior)
- npm ou yarn
- Git

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/vazlucase/beatriz-cavalcante-site.git

# 2. Entre na pasta
cd beatriz-cavalcante-site

# 3. Instale as dependências
npm install
# ou
yarn install

# 4. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite o .env.local com suas credenciais (se necessário)

# 5. Inicie o servidor de desenvolvimento
npm run dev
# ou
yarn dev
```

```bash
# 6. Abra http://localhost:3000 no navegador

Executando com Docker 
# Suba o container com Docker Compose
docker-compose up
```

📁 Estrutura de Pastas
beatriz-cavalcante-site/
├── public/
│   └── images/          # Imagens estáticas
├── src/
│   ├── app/             # App Router (Next.js 15)
│   ├── components/      # Componentes reutilizáveis
│   └── styles/          # Estilos globais
├── .env.example         # Exemplo de variáveis de ambiente
├── docker-compose.yml   # Configuração Docker
├── Dockerfile           # Dockerfile para produção
├── next.config.js       # Configuração do Next.js
├── package.json         # Dependências e scripts
├── tailwind.config.js   # Configuração do Tailwind
└── tsconfig.json        # Configuração do TypeScript

🤝 Como Contribuir
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.
    Faça um fork do projeto
    Crie uma branch para sua feature (git checkout -b feature/nova-feature)
    Commit suas alterações (git commit -m 'Adiciona nova feature')
    Push para a branch (git push origin feature/nova-feature)
    Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

📬 Contato
    Desenvolvedor: Lucas Vaz
    GitHub: vazlucase
    LinkedIn: lucasskth
    Projeto: beatriz-cavalcante-site
Desenvolvido com ❤️ por Lucas Vaz
