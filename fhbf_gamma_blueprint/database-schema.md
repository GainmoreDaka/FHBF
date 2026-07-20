# Database Schema Overview

## users
- id
- first_name
- last_name
- email
- phone
- password_hash
- role
- status
- created_at
- updated_at

## membership_applications
- id
- user_id
- membership_type
- business_name
- industry
- seven_mountain_category
- province
- country
- proof_of_payment_url
- application_status: pending, approved, rejected, more_info
- admin_notes
- created_at

## memberships
- id
- user_id
- membership_number
- membership_type
- start_date
- expiry_date
- status
- qr_code_url
- digital_card_url

## businesses
- id
- owner_id
- name
- slug
- category
- description
- logo_url
- cover_image_url
- website
- whatsapp
- email
- province
- country
- verified
- featured

## village_stands
- id
- stand_code
- stand_type
- area_label
- price_member
- price_non_member
- status: available, reserved, booked, blocked

## village_bookings
- id
- user_id
- business_id
- stand_id
- booking_type
- member_price_applied
- amount_due
- payment_status
- booking_status

## events
- id
- title
- event_type
- start_date
- end_date
- venue
- description
- featured

## event_registrations
- id
- event_id
- user_id
- ticket_type
- qr_code_url
- checked_in_at
- payment_status

## opportunities
- id
- posted_by
- type: job, tender, contract, partnership, investment, franchise
- title
- description
- closing_date
- status

## marketplace_listings
- id
- business_id
- category
- title
- description
- price
- images
- status

## payments
- id
- user_id
- reference
- payment_method
- amount
- currency
- proof_url
- status
- related_type
- related_id

## notifications
- id
- user_id
- channel: email, whatsapp, sms
- subject
- message
- status
- sent_at
