# Deployment Plan

## Environment
- Production server: VPS or cloud instance
- Reverse proxy: Nginx
- App containers: Docker Compose
- Database: PostgreSQL
- Storage: Cloudflare R2 / S3
- SSL: Let's Encrypt

## Services
- frontend: Next.js
- backend: NestJS / Express API
- postgres: PostgreSQL
- redis: queues/cache
- worker: notifications, QR generation, PDF generation

## Deployment Steps
1. Configure domain and DNS.
2. Provision VPS/cloud server.
3. Install Docker and Docker Compose.
4. Configure environment variables.
5. Run database migrations.
6. Seed membership levels and stand pricing.
7. Deploy frontend and backend.
8. Configure Nginx and SSL.
9. Test membership application.
10. Test Business Village booking.
11. Test admin approval workflow.
12. Test email/WhatsApp notifications.

## Campus Free Access
Configure captive portal / walled garden to allow:
- faithworldministries.org
- faithworldministries.org/fhbf
- FHBF registration pages
- FHBF directory
- FHBF event map
without requiring paid internet access.
