# API Routes

## Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

## Membership
POST /api/membership/apply
GET /api/membership/me
GET /api/membership/card
POST /api/admin/membership/:id/approve
POST /api/admin/membership/:id/reject

## Business Directory
GET /api/businesses
GET /api/businesses/:slug
POST /api/businesses
PATCH /api/businesses/:id
POST /api/businesses/:id/gallery

## Business Village
GET /api/village/stands
POST /api/village/bookings
GET /api/village/bookings/me
POST /api/admin/village/stands
PATCH /api/admin/village/stands/:id

## Events
GET /api/events
POST /api/events/:id/register
POST /api/events/check-in

## Opportunities
GET /api/opportunities
POST /api/opportunities
POST /api/opportunities/:id/apply

## Marketplace
GET /api/marketplace
POST /api/marketplace
PATCH /api/marketplace/:id

## Trade Missions
GET /api/trade-missions
POST /api/trade-missions/:id/register

## Payments
POST /api/payments/upload-proof
POST /api/payments/stripe/webhook
POST /api/payments/manual/verify

## Admin
GET /api/admin/dashboard
GET /api/admin/members
GET /api/admin/applications
GET /api/admin/revenue
