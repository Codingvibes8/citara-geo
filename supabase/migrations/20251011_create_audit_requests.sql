-- Audit lead requests from the website (app/api/audit/route.ts)
-- Run this in the Supabase SQL editor: https://supabase.com/dashboard/project/_/sql

create table if not exists public.audit_requests (
  id          uuid primary key default gen_random_uuid(),
  domain      text not null,
  name        text not null,
  email       text not null,
  status      text not null default 'new' check (status in ('new', 'contacted', 'completed')),
  created_at  timestamptz not null default now()
);

-- RLS: no client-side access. Only the service role key (used by the API
-- route) can read or write this table.
alter table public.audit_requests enable row level security;

-- Helpful for dedup / follow-up queries
create index if not exists audit_requests_email_idx on public.audit_requests (email);
create index if not exists audit_requests_created_at_idx on public.audit_requests (created_at desc);
