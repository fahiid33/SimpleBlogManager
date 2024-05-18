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

## Getting Started

### Prerequisites

- Node.js
- PostgreSQL and Prisma
- Github account for CUD operations (Create, Update, Delete) 

### Installation


Follow the steps below to set up and run the application:


1. Clone the repository:

```bash
git clone https://github.com/fahiid33/SimpleBlogManager.git
cd blog-manager
```

2. Install dependencies:

```bash

npm install
```

This will install all the necessary dependencies for the project.


3. installing Prisma ORM (if it's not already installed).

```bash
npm install -g prisma
```

4. Install PostgreSQL

install PostgreSQL on your local machine if it's not already installed.

Ubuntu:

```bash

sudo apt update
sudo apt install postgresql postgresql-contrib
```

Mac (using Homebrew):

```bash

brew install postgresql
```
5. Create Database and User

If you are not using Docker, you need to manually create the database and user in PostgreSQL:

Switch to the PostgreSQL user:

```bash

sudo -i -u postgres
```

Open the PostgreSQL prompt:

```bash

psql

```

Create the database and user, and grant the user access to the database:

sql
```sql

CREATE DATABASE mydb;
CREATE USER new_user WITH ENCRYPTED PASSWORD 'newuser123';
GRANT ALL PRIVILEGES ON DATABASE mydb TO new_user;
```

Exit the PostgreSQL prompt:

```sql
\q

```

Exit the PostgreSQL user:

```bash
exit
```

6. Generate the Prisma Client and Migrate the Prisma schema

```bash
prisma generate
prisma migrate dev --name init
```
7. Set up environment variables

Create a .env file in the root directory and add the following variables:

```bash
DATABASE_URL="postgresql://new_user:newuser123@localhost:5432/mydb?schema=public"
URL = "http://localhost:3000"
```


8. Finally run the application:

```bash

npm run dev

```
Access the application: Once the application is running, you can access it at http://localhost:3000.

## Troubleshooting

   ### Slow Repository Cloning:

If the cloning process is slow, you can try a shallow clone to only fetch the latest commits:

```bash

git clone --depth 1 https://github.com/fahiid33/SimpleBlogManager.git 

```
### Database Connection Issues:


Ensure PostgreSQL is running and accessible. If using Docker, verify that the container is up and the port is correctly mapped.



### Environment Variables:

Double-check the .env file for correct database connection details.



For any issues or contributions, feel free to open a pull request or issue on the repository.



### Hint :

the domain in about section of the repository will only show you the website you will not be able to do CRUD operations e.g interact with the database, it's just a preview of what the website is looking like
(in progress ...)