##Here i will be keeping the track of all my next-js learning 

## these are also my developement notes

if you see any error in a particular function or components there is specific page in NEXTJS that is error.tsx that will show a predefined message in ui wherever that error is popped up 

Also for loading animations although next is so fast you can barely see the loading animations but still 
Whenever we need to add a loading ui we can simply add a loading.tsx file 

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

For search engine optimization, you can set up the metadata config. Please refer to the Next.js documentation for more details.