CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  key VARCHAR(255) UNIQUE NOT NULL,
  value JSONB
);

CREATE TABLE menus (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(255) NOT NULL,
  href VARCHAR(255) NOT NULL,
  parent_id UUID REFERENCES menus(id)
);

CREATE TABLE pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255),
  content JSONB
);

CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255),
  naver_review_url VARCHAR(255)
);

CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(255) NOT NULL,
  thumbnail_url VARCHAR(255),
  video_url VARCHAR(255)
);

CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(255) NOT NULL,
  image_url VARCHAR(255)
);

CREATE TABLE event_options (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  event_id UUID REFERENCES events(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  price VARCHAR(255)
);

CREATE TABLE before_after_cases (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  tag VARCHAR(100),
  description TEXT,
  before_image_url VARCHAR(255),
  after_image_url VARCHAR(255)
);

CREATE TABLE consultations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  name VARCHAR(100) NOT NULL,
  age INTEGER,
  gender VARCHAR(10),
  phone VARCHAR(20) NOT NULL,
  agree BOOLEAN DEFAULT FALSE,
  status VARCHAR(50) DEFAULT 'PENDING'
);

CREATE TABLE notices (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  title VARCHAR(255) NOT NULL,
  content TEXT
);
