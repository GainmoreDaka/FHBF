# FHBF API Specification

## Auth
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

## Membership
POST /api/memberships/apply
GET /api/memberships/me
PATCH /api/memberships/:id/status
GET /api/memberships/:id/card

## Businesses
POST /api/businesses
GET /api/businesses
GET /api/businesses/:slug
PATCH /api/businesses/:id
PATCH /api/businesses/:id/verify

## Business Village
GET /api/village/stands
POST /api/village/bookings
GET /api/village/bookings/me
PATCH /api/village/bookings/:id/status

## Events
GET /api/events
POST /api/events
POST /api/events/:id/register
POST /api/events/:id/checkin

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
POST /api/trade-missions/:id/upload-document

## Sponsors
POST /api/sponsors/apply
GET /api/sponsors
PATCH /api/sponsors/:id/status

## Admin Dashboard
GET /api/admin/metrics
GET /api/admin/pending-members
GET /api/admin/revenue-summary
