import { Link } from "react-router-dom";
import { Play, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import heroBanner from "@/assets/hero-banner.jpg";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const featuredMovies = [
  { id: 1, title: "Dark Shadows", image: movie1, year: "2024", rating: 8.5, genre: "Action" },
  { id: 2, title: "Cosmic Journey", image: movie2, year: "2024", rating: 9.0, genre: "Sci-Fi" },
  { id: 3, title: "The Awakening", image: movie3, year: "2024", rating: 7.8, genre: "Horror" },
  { id: 4, title: "Love's Destiny", image: movie4, year: "2023", rating: 8.2, genre: "Romance" },
  { id: 5, title: "Laugh Out Loud", image: movie5, year: "2024", rating: 7.5, genre: "Comedy" },
  { id: 6, title: "Mystic Realms", image: movie6, year: "2024", rating: 8.9, genre: "Fantasy" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Unlimited</span>
              <br />
              Movies, TV Shows
              <br />
              & More
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Watch anywhere. Stream unlimited movies and TV shows on your favorite devices.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/movies">
                <Button variant="hero" size="lg" className="gap-2 text-lg px-8 py-6">
                  <Play className="h-6 w-6" />
                  Start Watching
                </Button>
              </Link>
              <Link to="/movies">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                  Browse Movies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h2 className="text-4xl font-bold">Trending Now</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {featuredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/movies">
            <Button variant="hero" size="lg">
              View All Movies
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>© 2024 CinemaHub. All rights reserved.</p>
            <p className="text-sm mt-2">Stream unlimited movies and TV shows in HD quality.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
