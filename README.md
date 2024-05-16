# Blog Manager Application

## Overview

Welcome to the Blog Manager Application! This full-stack application is built with Next.js, providing users with a seamless experience for managing blog posts. It features user authentication, real-time commenting, category-based filtering, and more.

## Features

- **Authentication:**
  - Users can log in using GitHub authentication.
  - Non-authenticated users can only view blogs and cannot create, edit, delete, or comment on blog posts.

- **Blog Management:**
  - Create Blogs: Authenticated users can create new blog posts by uploading an image and providing a title, description, and category.
  - Update Blogs: Users can update their existing blog posts.
  - Delete Blogs: Users can delete their existing blog posts.

- **Comments:** Users can add comments to blog posts in real-time by clicking on the blog name.

- **Category and Search:**
  - Users can view blog posts by category.
  - Users can search for blog posts by name.

- **Theme:** Users can switch between dark and light modes.

- **Logout:** Users can log out, limiting their access to only viewing blog posts.

## Technologies Used

- Next.js: For both front-end and back-end development.
- PostgreSQL: Database management, interfaced with Prisma ORM.
- Firebase: For image storage.
- Docker: (in progress).

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL
- Firebase account

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/blog-manager.git
cd blog-manager
```

2. Install dependencies:

```bash

npm install
```

This will install all the necessary dependencies for the project.

3. Set up environment variables:

Create a .env file in the root directory and add the following variables:

```bash

.env: 

DATABASE_URL="postgresql://YOUR_DB_USERNAME:YOUR_DB_USER_PASSWORD@localhost:5432/mydb?schema=public"
URL = "http://localhost:3000"

```

4. Set up the Prisma schema:

```bash

npx prisma migrate dev --name init
npx prisma generate
```

5. Run the application:

```bash

npm run dev

```
