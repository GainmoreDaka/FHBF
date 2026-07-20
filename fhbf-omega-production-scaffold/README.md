# FHBF Omega Production Scaffold

This is the first production-code scaffold for the Faith Heights Business Fellowship platform.

It is structured as a scalable monorepo with:

- Public website
- Member portal
- Admin portal
- API modules
- Database package
- Shared types
- Notification package
- Docker/PostgreSQL deployment starter

## Launch MVP Modules

1. Membership applications
2. Admin approval workflow
3. Digital membership cards
4. Business directory
5. Business Village booking
6. Events registration
7. Opportunities hub

## Quick Start

```bash
cp .env.example .env
docker compose -f infrastructure/docker/docker-compose.yml up -d
npm install
npm run dev
```

This scaffold is not yet a complete production app, but it is structured for real development.
