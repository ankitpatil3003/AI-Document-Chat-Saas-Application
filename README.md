# AI Document Chat SaaS App (PROJECT)
### Not a live application, just a simple project
<a href="https://ai-document-chat-saas-application.onrender.com">
  <img
    src="https://us1.discourse-cdn.com/flex016/uploads/render/original/2X/1/11352202c8503f736bea5efb59684f678d7c860c.svg"
    alt="Deployed on Render"
    width="80"
  />
</a>


An interactive document companion that turns your PDFs into a conversational AI experience. Upload, store, and chat with your documents—summarize, query, and get insights in real time.

Credits: [Sonny Sangha Youtuber](https://www.youtube.com/@SonnySangha)
---

## 🚀 Table of Contents

- [Demo & Access](#demo--access)  
- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Environment Variables](#environment-variables)  
  - [Run Locally](#run-locally)  
- [Project Structure](#project-structure)  
- [Deployment](#deployment)  
- [Usage](#usage)  
- [Contributing](#contributing)  
- [License](#license)   
- [Contact](#contact)  

---

## 📺 Demo & Access

- **Live Demo**: [Render](https://ai-document-chat-saas-application.onrender.com)  
- **Dashboard**: `/dashboard` (requires sign‑in)  
- **Upload**: `/dashboard/upload`  
- **Chat with Document**: `/dashboard/files/{fileId}`  

---

## ✨ Features

- **PDF Storage & Retrieval**  
- **Interactive Chatbot**: Ask questions, summarize content, get context-aware answers.  
- **Authentication & Authorization**: Clerk-powered SSO + MFA support.  
- **Tiered Pricing**: Free & Pro plans via Stripe Checkout & Customer Portal. (Not a real payment) 
- **Real‑time Updates**: Firestore + React Firebase Hooks for chat history.  
- **Responsive UI**: Tailwind CSS + Radix UI + lucide-react icons.  
- **PDF Viewer**: In‑browser PDF rendering and navigation.

---

## 🛠 Tech Stack

| Layer                | Technology                                |
| :------------------- | :---------------------------------------- |
| **Framework**        | Next.js 15, React, TypeScript             |
| **Styling**          | Tailwind CSS, class-variance-authority    |
| **Auth**             | Clerk (OAuth, SSO, MFA)                  |
| **Database**         | Firebase Firestore (Client & Admin SDK)  |
| **Payments**         | Stripe Checkout, Billing Portal          |
| **AI & Embeddings**  | OpenAI API, Custom embedding functions   |
| **State & Data**     | React Firebase Hooks, Clerk Hooks        |
| **Icons & Fonts**    | lucide-react, Google Fonts (Geist)       |
| **Deployment**       | Render (Next.js)                         |

---

## 📥 Getting Started

### Prerequisites

- Node.js ≥ 18  
- npm / yarn / pnpm  
- A [Clerk](https://clerk.dev) account  
- A [Firebase](https://firebase.google.com) project with Firestore & Service Account  
- A [Stripe](https://stripe.com) account  
- An [OpenAI](https://platform.openai.com) API key  

### Installation

```bash
# Clone
git clone https://github.com/ankitpatil3003/ai-document-chat-saas-app.git
cd ai-document-chat-saas-app

# Install dependencies
npm install
# or
pnpm install
# or
yarn
```

### Environment Variables
Create a .env.local in the project root:

```dotenv
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...

# Firebase Admin
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=service-account@...
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"

# Stripe
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...

# OpenAI
OPENAI_API_KEY=sk-...

# Next.js
NEXTAUTH_URL=http://localhost:3000
```
### Run Locally
```bash
# Start development server
npm run dev
# Visit http://localhost:3000
```
For production build & start:
```bash
npm run build
npm run start
# by default serves on port 3000 (or configured port)
```

## 📁 Project Structure
```bash
.
├── app
│   ├── layout.tsx            # Root layout (ClerkProvider, fonts)
│   ├── page.tsx              # Landing / Home page
│   └── dashboard
│       ├── layout.tsx        # Dashboard layout (Header, nav)
│       ├── page.tsx          # Documents list
│       ├── upload/page.tsx   # File uploader
│       └── [id]/page.tsx     # ChatToFile page (Chat + PdfView)
│   └── api
│       └── webhooks
│           └── stripe
│               └── route.ts  # Webhook handling
├── components
│   ├── Chat.tsx              # Chat UI & logic
│   ├── PdfView.tsx           # PDF viewer
│   ├── Documents.tsx         # File list
│   ├── FileUploader.tsx      # Upload logic
│   ├── Header.tsx            # Navigation header
│   ├── UpgradeButton.tsx     # Stripe portal button
│   ├── ui
│   │   ├── button.tsx        # CVA‑powered Button
│   │   └── input.tsx         # Styled Input
│   └── ChatMessage.tsx       # Single message renderer
├── actions
│   ├── askQuestion.ts        # Server‑action: OpenAI query
│   ├── createCheckoutSession.ts
│   └── createStripePortal.ts
├── hooks
│   └── useSubscription.ts
├── lib
│   ├── stripe-js.ts          # Stripe.js loader
│   └── utils.ts              # cn (class names) helper
├── firebase.ts               # Client Firestore init
├── firebaseAdmin.ts          # Admin SDK init
├── generateEmbeddings.ts     # Embedding util (server)
├── route.ts                  # API routes (if any)
├── globals.css               # Tailwind globals
└── README.md                 # ← You are here
```
## ☁️ Deployment
☁️ Deployment
1. Render
- Connect your GitHub repo
- Set environment variables in the Render dashboard
- Deploy

## 💡 Usage
1. Sign up / Sign in via Clerk.
2. Upload a PDF under “My Documents.”
3. Select a file to enter the chat interface.
4. Ask questions in natural language—get instant AI responses.
5. Upgrade to Pro for increased limits & advanced analytics.

## 🤝 Contributing
1. Fork the repository
2. Create a feature branch (git checkout -b feature/foo)
3. Commit your changes (git commit -am 'Add foo')
4. Push to the branch (git push origin feature/foo)
5. Open a Pull Request
Please follow the existing code style and add relevant tests.

## 📄 License
This project is licensed under the MIT License. See LICENSE for details.

## ✉️ Contact
- Made by Ankit Patil
- GitHub: @ankitpatil3003
- Email: apatil@binghamton.edu
- Project Link: [https://github.com/ankitpatil3003/ai-document-chat-saas-app](https://github.com/ankitpatil3003/AI-Document-Chat-Saas-Application/)
