-- SQL script to create tables in Supabase for the church app

-- Create users table (if not already created by Supabase auth)
-- Note: Supabase auth automatically creates a users table, but you can extend it

-- Create profiles table to store additional user information
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  bio TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create events table
CREATE TABLE IF NOT EXISTS events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  date TIMESTAMP WITH TIME ZONE NOT NULL,
  location TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create resources table
CREATE TABLE IF NOT EXISTS resources (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL, -- 'sermon', 'article', 'video', etc.
  url TEXT,
  content TEXT,
  author_id UUID REFERENCES profiles(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create connect_requests table for connection requests
CREATE TABLE IF NOT EXISTS connect_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id) NOT NULL,
  request_type TEXT NOT NULL, -- 'prayer', 'counseling', 'membership', etc.
  message TEXT,
  status TEXT DEFAULT 'pending', -- 'pending', 'in_progress', 'completed'
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create donations table
CREATE TABLE IF NOT EXISTS donations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  amount DECIMAL(10,2) NOT NULL,
  currency TEXT DEFAULT 'USD',
  payment_method TEXT,
  transaction_id TEXT,
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Enable Row Level Security (RLS)
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE connect_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;

-- Create policies for profiles
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Create policies for events (public read, admin write)
CREATE POLICY "Anyone can view events" ON events
  FOR SELECT USING (true);

-- Create policies for resources (public read, admin write)
CREATE POLICY "Anyone can view resources" ON resources
  FOR SELECT USING (true);

-- Create policies for connect_requests
CREATE POLICY "Users can view their own requests" ON connect_requests
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own requests" ON connect_requests
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own requests" ON connect_requests
  FOR UPDATE USING (auth.uid() = user_id);

-- Create policies for donations
CREATE POLICY "Users can view their own donations" ON donations
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own donations" ON donations
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Create function to handle user profile creation on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Insert sample data for events
INSERT INTO events (title, description, date, location, image_url) VALUES
('Sunday Worship Service', 'Join us for our weekly worship service with inspiring music and powerful preaching.', NOW() + INTERVAL '7 days', 'Main Sanctuary', 'https://images.unsplash.com/photo-1515943073294-77dfc14c7a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'),
('Community Outreach', 'Serving our local community with food and resources for those in need.', NOW() + INTERVAL '14 days', 'Community Center', 'https://images.unsplash.com/photo-1559027615-cd4628192c4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'),
('Youth Ministry Night', 'Fun activities and Bible study for teens and young adults.', NOW() + INTERVAL '21 days', 'Youth Hall', 'https://images.unsplash.com/photo-1529156069898-49953e39b3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'),
('Volunteer Appreciation Dinner', 'Celebrating our amazing volunteers who make our ministry possible.', NOW() + INTERVAL '28 days', 'Fellowship Hall', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80');

-- Insert sample data for resources
INSERT INTO resources (title, description, type, url, content) VALUES
('Welcome to FaithConnect', 'A comprehensive guide for new members of our church community.', 'article', NULL, 'Welcome to FaithConnect Church! We are excited to have you join our community of faith...'),
('Sunday Sermon: Finding Peace', 'This weeks message about finding peace in turbulent times.', 'sermon', 'https://example.com/sermon1', NULL),
('Bible Study Guide - Romans', 'Weekly study guide for our Romans Bible study group.', 'article', NULL, 'Week 1: Introduction to Romans...'),
('Prayer Request Guidelines', 'How to submit prayer requests and what to expect.', 'article', NULL, 'We believe in the power of prayer and community support...');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = TIMEZONE('utc'::text, NOW());
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER handle_updated_at_profiles
  BEFORE UPDATE ON profiles
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER handle_updated_at_events
  BEFORE UPDATE ON events
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER handle_updated_at_resources
  BEFORE UPDATE ON resources
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();

CREATE TRIGGER handle_updated_at_connect_requests
  BEFORE UPDATE ON connect_requests
  FOR EACH ROW EXECUTE PROCEDURE handle_updated_at();