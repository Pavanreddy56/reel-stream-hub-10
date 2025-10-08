-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create movies table to store movie data
CREATE TABLE public.movies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  year TEXT NOT NULL,
  rating NUMERIC(3,1) NOT NULL,
  duration TEXT NOT NULL,
  genre TEXT NOT NULL,
  country TEXT,
  language TEXT,
  image_url TEXT NOT NULL,
  video_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.movies ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read movies (public access)
CREATE POLICY "Anyone can view movies"
ON public.movies
FOR SELECT
USING (true);

-- Only authenticated users can insert movies
CREATE POLICY "Authenticated users can insert movies"
ON public.movies
FOR INSERT
TO authenticated
WITH CHECK (true);

-- Only authenticated users can update movies
CREATE POLICY "Authenticated users can update movies"
ON public.movies
FOR UPDATE
TO authenticated
USING (true);

-- Only authenticated users can delete movies
CREATE POLICY "Authenticated users can delete movies"
ON public.movies
FOR DELETE
TO authenticated
USING (true);

-- Create updated_at trigger
CREATE TRIGGER update_movies_updated_at
BEFORE UPDATE ON public.movies
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample movie data
INSERT INTO public.movies (title, description, year, rating, duration, genre, country, language, image_url, video_url)
VALUES 
  ('Dark Shadows', 'An atrocious British general is in charge of a secluded fictional village in pre-Independence Madras. The story spans three days and follows the illiterate and oppressed villagers'' lives as they fail to receive the news of India''s Independence due to isolation. A local lout, Param, leads a revolt to free them all.', '2024', 8.5, '2h 15m', 'Action, Thriller', 'India', 'Telugu', '/src/assets/movie-1.jpg', 'https://youtu.be/3c-iBn73dDE?si=pcfbYraOHd3txwoH');