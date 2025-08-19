# QR Checklist (Forklift/Tool) — Next.js + Supabase
Scan a QR on an asset → complete a checklist → store immutable audit logs. Mobile-friendly, deploys to Vercel.

## Quick start
1) `npm i`  →  `cp .env.example .env.local` and paste Supabase keys  
2) Supabase → SQL → run `supabase/database.sql`  
3) `npm run dev` → open `http://localhost:3000`  
4) Go to `/setup` → Seed Demo Data → try `/assets`, `/submissions`

## Deploy
Push to GitHub → Import in Vercel → add envs (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE`, `APP_URL`) → Deploy. Then set `APP_URL` to live URL and redeploy.
