import { useState } from "react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";
import movie5 from "@/assets/movie-5.jpg";
import movie6 from "@/assets/movie-6.jpg";

const allMovies = [
  { id: 1, title: "Dark Shadows", image: movie1, year: "2024", rating: 8.5, genre: "Action" },
  { id: 2, title: "Cosmic Journey", image: movie2, year: "2024", rating: 9.0, genre: "Sci-Fi" },
  { id: 3, title: "The Awakening", image: movie3, year: "2024", rating: 7.8, genre: "Horror" },
  { id: 4, title: "Love's Destiny", image: movie4, year: "2023", rating: 8.2, genre: "Romance" },
  { id: 5, title: "Laugh Out Loud", image: movie5, year: "2024", rating: 7.5, genre: "Comedy" },
  { id: 6, title: "Mystic Realms", image: movie6, year: "2024", rating: 8.9, genre: "Fantasy" },
  { id: 7, title: "Dark Shadows", image: movie1, year: "2024", rating: 8.5, genre: "Action" },
  { id: 8, title: "Cosmic Journey", image: movie2, year: "2024", rating: 9.0, genre: "Sci-Fi" },
  { id: 9, title: "The Awakening", image: movie3, year: "2024", rating: 7.8, genre: "Horror" },
  { id: 10, title: "Love's Destiny", image: movie4, year: "2023", rating: 8.2, genre: "Romance" },
  { id: 11, title: "Laugh Out Loud", image: movie5, year: "2024", rating: 7.5, genre: "Comedy" },
  { id: 12, title: "Mystic Realms", image: movie6, year: "2024", rating: 8.9, genre: "Fantasy" },
];

const Movies = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  const genres = ["All", "Action", "Sci-Fi", "Horror", "Romance", "Comedy", "Fantasy"];

  const filteredMovies = selectedGenre === "All" 
    ? allMovies 
    : allMovies.filter(movie => movie.genre === selectedGenre);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-gradient">Explore Movies</h1>
          <p className="text-muted-foreground">Discover your next favorite film</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {genres.map((genre) => (
            <Button
              key={genre}
              variant={selectedGenre === genre ? "default" : "outline"}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Movies;
