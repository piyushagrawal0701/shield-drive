# 🛡️ ShieldDrive - Auto Insurance Quote Landing Page

A modern, responsive insurance lead generation web application built with **Next.js 16**, **React 19**, **Tailwind CSS**, **Prisma**, and **PostgreSQL**.

The application allows users to request free auto insurance quotes through a clean, responsive form while securely storing submitted leads in a PostgreSQL database. It also includes an Admin Dashboard for viewing all submitted leads.

---

# 🌐 Live Demo

The project is deployed and publicly accessible.

**🔗 Live Application:**  
https://shielddrive.netlify.app

## 🚀 Features

### Customer Landing Page

- Modern responsive UI
- Mobile-first design
- Hero section
- Benefits section
- Trust indicators
- Customer testimonials
- FAQ section
- CTA section
- Footer
- Smooth scrolling navigation

### Lead Form

- React Hook Form
- Zod validation
- Client & server-side validation
- Indian phone number validation
- Indian PIN code validation
- Vehicle information
- Loading state
- Success & error toasts

### Backend

- Next.js API Routes
- Prisma ORM
- PostgreSQL database
- Secure server-side validation
- REST API for lead submission

### Admin Dashboard

- View all submitted leads
- Dashboard statistics
- Total Leads
- Today's Leads
- Monthly Leads
- Latest Lead
- Responsive data table
- Vehicle information
- Submission dates

---

# 🛠 Tech Stack

### Frontend

- Next.js 16
- React 19
- Tailwind CSS
- React Hook Form
- Zod
- Lucide React

### Backend

- Next.js API Routes
- Prisma ORM

### Database

- PostgreSQL (Neon)

---

# 📂 Project Structure

```
src
│
├── app
│   ├── admin
│   ├── api
│   │   └── leads
│   └── page.jsx
│
├── components
│   ├── Navbar
│   ├── Hero
│   ├── LeadForm
│   ├── Benefits
│   ├── Testimonials
│   ├── FAQ
│   ├── CTA
│   └── Footer
│
├── lib
│   ├── prisma.js
│   └── validation.js
│
prisma
│
├── schema.prisma

```

---


# Prisma Setup

Generate Prisma Client

```bash
npx prisma generate
```

Push schema

```bash
npx prisma db push
```

---

# Run Development Server

```bash
npm run dev
```

Open

```
http://localhost:3000
```

---

# Admin Dashboard

```
http://localhost:3000/admin
```

---

# API Endpoint

### Submit Lead

```
POST /api/leads
```

Example Body

```json
{
  "firstName": "Piyush",
  "lastName": "Agrawal",
  "email": "piyush@example.com",
  "phone": "9876543210",
  "zipCode": "482001",
  "year": "2023",
  "make": "Toyota",
  "model": "Corolla"
}
```

Successful Response

```json
{
  "success": true,
  "message": "Lead submitted successfully."
}
```

---

# Validation

The project validates:

- First Name
- Last Name
- Email Address
- Indian Mobile Number
- 6-digit Indian PIN Code
- Vehicle Year
- Vehicle Make
- Vehicle Model

Validation is performed using **Zod** on both client and server.

---

# Database Schema

```prisma
model Lead {
  id         String   @id @default(cuid())

  firstName  String
  lastName   String

  email      String
  phone      String

  zipCode    String

  year       String
  make       String
  model      String

  createdAt  DateTime @default(now())
}
```

---

# UI Highlights

- Responsive Design
- Clean Dashboard
- Professional Insurance Landing Page
- Smooth Animations
- Modern Cards
- Responsive Tables
- Tailwind CSS Components
- Mobile Friendly

---

# Future Improvements

- Authentication
- Admin Login
- Export Leads (Excel/PDF)
- Search & Filter Leads
- Pagination
- Email Notifications
- SMS Integration
- Insurance Provider Integration
- Analytics Dashboard

---

# Performance

- Server Components
- Optimized Images
- Fast Navigation
- Prisma ORM
- PostgreSQL
- Next.js App Router

---

# Developed By

**Piyush Agrawal**

Full Stack Developer

Portfolio:
https://piyushportfolio7.netlify.app

---

# License

This project is developed for educational and assignment purposes.