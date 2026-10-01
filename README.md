# Well IT & Consultancy Ltd — Frontend Redesign

A complete responsive frontend redesign for Well IT & Consultancy Ltd, built with Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion, React Hot Toast, and the official Hugeicons React packages.

## Included pages

- Home
- About
- Services
- Industries
- Careers
- Contact

## Frontend features

- Responsive desktop/tablet/mobile navigation
- Modern offshore staffing / outsourcing positioning
- Animated hero and floating UI cards
- Scroll reveal animations with Framer Motion
- Reusable sections and data-driven cards
- Client testimonials
- Hiring models and industry coverage
- Careers page ready for an API-driven jobs list
- Contact form with React Hot Toast demo state
- SEO metadata
- Backend-ready environment variable (`NEXT_PUBLIC_API_URL`)
- Official `@hugeicons/react` + `@hugeicons/core-free-icons`

## Run in VS Code

1. Extract the ZIP.
2. Open the `wellit-redesign` folder in VS Code.
3. Open the VS Code terminal.
4. Make sure Node.js 20.9+ is installed (Node 22 LTS is recommended).
5. Install packages:

```bash
npm install
```

6. Start development mode:

```bash
npm run dev
```

7. Open:

```text
http://localhost:3000
```

## Production check

```bash
npm run build
npm start
```

## Backend integration later

Copy `.env.example` to `.env.local` and update:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

Recommended backend endpoints later:

- `POST /api/contact`
- `GET /api/jobs`
- `POST /api/jobs/:id/apply`
- `GET /api/insights`
- `GET /api/testimonials`

## Content direction used

The redesign prioritizes Well IT's current public positioning around remote staffing and offshore outsourcing. It includes service categories, industries, engagement models, contact details, testimonials, compliance references, and recent public content themes such as customer support ownership, finance operations, offshore onboarding, and career opportunities.

Facebook can restrict automated public-page retrieval, so current public company/social information was cross-checked with the official website and publicly indexed company updates instead of fabricating posts.

## Important note

This is the requested frontend-only version. Forms currently show a success toast and are intentionally not connected to a server/database yet.
