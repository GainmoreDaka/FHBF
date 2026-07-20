-- FHBF Alpha PostgreSQL Starter Schema

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  role TEXT DEFAULT 'member',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE memberships (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  membership_number TEXT UNIQUE,
  membership_type TEXT NOT NULL,
  start_date DATE,
  expiry_date DATE,
  status TEXT DEFAULT 'pending',
  payment_status TEXT DEFAULT 'unpaid',
  payment_reference TEXT,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_id UUID REFERENCES users(id),
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  category TEXT,
  seven_mountain TEXT,
  description TEXT,
  services TEXT,
  products TEXT,
  province TEXT,
  country TEXT DEFAULT 'Zimbabwe',
  whatsapp TEXT,
  email TEXT,
  website TEXT,
  logo_url TEXT,
  cover_url TEXT,
  directory_status TEXT DEFAULT 'pending',
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  event_type TEXT,
  start_date DATE,
  end_date DATE,
  venue TEXT,
  description TEXT,
  status TEXT DEFAULT 'draft',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE event_registrations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id UUID REFERENCES events(id),
  user_id UUID REFERENCES users(id),
  registration_type TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  checkin_status TEXT DEFAULT 'not_checked_in',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE village_stands (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stand_number TEXT UNIQUE NOT NULL,
  stand_type TEXT NOT NULL,
  price_member NUMERIC(10,2),
  price_non_member NUMERIC(10,2),
  status TEXT DEFAULT 'available'
);

CREATE TABLE village_bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stand_id UUID REFERENCES village_stands(id),
  user_id UUID REFERENCES users(id),
  business_id UUID REFERENCES businesses(id),
  is_member BOOLEAN DEFAULT false,
  amount_due NUMERIC(10,2),
  payment_status TEXT DEFAULT 'unpaid',
  booking_status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE opportunities (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  posted_by UUID REFERENCES users(id),
  title TEXT NOT NULL,
  opportunity_type TEXT,
  description TEXT,
  location TEXT,
  closing_date DATE,
  status TEXT DEFAULT 'open',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE marketplace_listings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  business_id UUID REFERENCES businesses(id),
  title TEXT NOT NULL,
  listing_type TEXT,
  description TEXT,
  price NUMERIC(10,2),
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE sponsors (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  organisation_name TEXT NOT NULL,
  contact_name TEXT,
  email TEXT,
  phone TEXT,
  package TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  logo_url TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT now()
);
