# ZOCA Courtyard – Premium Cafe Website

Production-ready Next.js 14 (App Router) restaurant website with MongoDB Atlas, Mongoose, booking workflow, menu APIs, admin auth (JWT + bcrypt), and elegant premium UI.

## Stack
- Next.js 14 + TypeScript + Tailwind CSS
- MongoDB Atlas + Mongoose
- Zod validation
- JWT authentication + role-based access control
- Server Actions for booking submission

## Folder Structure
- `app/` routes and API handlers
- `components/` reusable UI/layout/feature components
- `lib/models` mongoose schemas (`Admin`, `Booking`, `MenuItem`)
- `lib/actions` server actions
- `lib/validation` zod schemas

## Local Development
1. Install dependencies: `npm install`
2. Configure env: `cp .env.example .env.local`
3. Run app: `npm run dev`

## MongoDB Schemas
- `MenuItem`: name, category, description, price, veg/non-veg, image
- `Booking`: reservation fields with unique index on `{ date, timeSlot }`
- `Admin`: name, email, passwordHash, role

## API Routes
- `GET /api/menu`, `POST /api/menu`
- `POST /api/bookings`
- `POST /api/auth/login`
- `GET /api/admin/bookings`, `PATCH /api/admin/bookings/:id`
- `PATCH /api/admin/menu/:id`, `DELETE /api/admin/menu/:id`

## Deployment (Vercel)
1. Push repo to GitHub.
2. Import project in Vercel.
3. Set environment variables from `.env.example`.
4. Configure MongoDB Atlas IP access and DB user.
5. Deploy.

## Admin Bootstrap
Use a MongoDB shell/GUI to create an admin document in `admins`:
- `email`: your admin email
- `passwordHash`: bcrypt hash of password
- `role`: `admin`

Generate hash quickly:
```bash
node -e "console.log(require('bcryptjs').hashSync('YourStrongPass123',10))"
```

## Optional Integrations
- Add Cloudinary image upload flow using env keys.
- Add Razorpay payment route for reservation advance amount.
