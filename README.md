# Shopping E-Commerce Platform

A modern, full-stack e-commerce application built with Next.js for a Lebanon-based fashion retailer. Features product browsing, shopping cart, customer reviews, Instagram integration, and WhatsApp ordering support.

## 🚀 Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: Next.js Server Actions
- **Database**: PostgreSQL (Neon) with Prisma ORM
- **Caching**: Upstash Redis
- **Styling**: TailwindCSS, shadcn/ui, Radix UI
- **File Storage**: Uploadcare

## ✨ Features

- 🛍️ Product catalog with collections and variants
- 🛒 Shopping cart with persistent storage
- ⭐ Customer reviews and ratings
- 📱 Responsive design with mobile-first approach
- 📸 Instagram feed integration
- 💬 WhatsApp ordering support
- ⚡ Redis caching for performance
- 🔄 Real-time cart updates

## 🏃 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm
- PostgreSQL database (Neon recommended)
- Upstash Redis account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shopping
```

2. Install dependencies:
```bash
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file with:
```env
DATABASE_URL="your-postgresql-connection-string"
REDIS_URL="your-upstash-redis-url"
UPLOADCARE_PUBLIC_KEY="your-uploadcare-key"
NEXT_PUBLIC_WHATSAPP_NUMBER="your-whatsapp-number"
```

4. Set up the database:
```bash
pnpm prisma migrate dev
pnpm prisma generate
```

5. Run the development server:
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🗄️ Database Schema

The application uses Prisma with the following main entities:
- **Products**: With variants (color, size, stock)
- **Collections**: Product groupings
- **Cart & CartItems**: Shopping functionality
- **Orders**: Purchase tracking
- **Comments**: Customer testimonials
- **InstagramPosts**: Social media integration

## 📁 Project Structure

```
├── server/          # Server actions for data fetching & mutations
├── src/
│   ├── app/         # Next.js app router pages
│   ├── components/  # Reusable UI components
│   └── types.ts     # TypeScript type definitions
├── prisma/          # Database schema and migrations
├── cache/           # Redis caching logic
└── public/          # Static assets
```

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Database Management

- `pnpm prisma studio` - Open Prisma Studio
- `pnpm prisma migrate dev` - Create and apply migrations
- `pnpm prisma generate` - Generate Prisma client

## 📝 Notes on Development

The codebase has structural issues I identified during development — messy DB queries, server actions used for fetching, and unclear file structure. Because of these issues, the project is not complete. I documented the lessons learned and applied them in next project.

### Key Lessons Learned

- **Authentication**: Always implement proper user authentication from the start
- **Database Optimization**: Avoid N+1 queries, use eager loading and pagination
- **Caching**: Plan cache invalidation strategies and fix typos in key naming
- **Type Safety**: Generate types from schema, avoid manual type maintenance
- **Error Handling**: Implement proper error logging and user-friendly messages
- **Server Actions**: Return operation results instead of using redirects for mutations

## 🚀 Deployment

The application is optimized for deployment on Vercel with:
- Automatic scaling
- Edge functions for server actions
- Built-in Redis and PostgreSQL integrations
