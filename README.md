# Eagle Ministries

A church management system built with Next.js, Prisma, and Stripe.

## Features

- User authentication with NextAuth.js
- Dashboard for church management
- Event management
- Member management
- Prayer request system
- Donation processing with Stripe
- Message system

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables:

   ```bash
   cp .env.example .env
   ```

   Then fill in your environment variables.

3. Set up the database:

   ```bash
   npx prisma db push
   npx prisma db seed
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/`: Next.js app directory
- `components/`: React components
- `lib/`: Utility functions and configurations
- `prisma/`: Database schema and seed data

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [NextAuth.js](https://next-auth.js.org/)
- [Stripe](https://stripe.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
