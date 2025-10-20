This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## API Routes in Next.js

In Next.js, you can create API routes by creating a `route.ts` file inside any folder in the `app` directory.

### Creating a simple API route

For example, to create an API route that returns a "Hello world" message, you can create a file at `app/api/hello/route.ts` with the following content:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Hello world from backend!' });
}
```

### Storing Dummy Data

You can create a file, for example `app/api/db.ts`, to store some dummy data.

### GET and POST routes

You can create GET and POST routes for a resource, for example "books", by creating a `route.ts` file at `app/api/books/route.ts`.

### Dynamic Routes for PUT and DELETE

For PUT and DELETE requests, you need to create a dynamic route handler. For example, you can create a file at `app/api/books/[id]/route.ts`. Inside this file, you can export `async function PUT` for the update request and `async function DELETE` for the delete request.

### Calling the API

You can call the API from your components like this:

```typescript
async function Page() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <main>
      <pre>{JSON.stringify(books, null, 2)}</pre>
    </main>
  );
}
```

## Search Engine Optimization (SEO)

For search engine optimization, you can set up the metadata config. Please refer to the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) for more details.
