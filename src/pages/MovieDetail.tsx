import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Play, Star, Clock, Calendar } from "lucide-react";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { Button } from "@/components/ui/button";
import movie1 from "@/assets/movie-1.jpg";
import movie2 from "@/assets/movie-2.jpg";
import movie3 from "@/assets/movie-3.jpg";
import movie4 from "@/assets/movie-4.jpg";

const movieData: Record<number, {
  title: string;
  image: string;
  year: string;
  rating: number;
  duration: string;
  genre: string;
  country: string;
  language: string;
  description: string;
}> = {
  1: {
    title: "Dark Shadows",
    image: movie1,
    year: "2024",
    rating: 8.5,
    duration: "2h 15m",
    genre: "Action, Thriller",
    country: "India",
    language: "Telugu",
    description: "An atrocious British general is in charge of a secluded fictional village in pre-Independence Madras. The story spans three days and follows the illiterate and oppressed villagers' lives as they fail to receive the news of India's Independence due to isolation. A local lout, Param, leads a revolt to free them all.",
  },
};

const relatedMovies = [
  { id: 2, title: "Cosmic Journey", image: movie2, year: "2024", rating: 9.0, genre: "Sci-Fi" },
  { id: 3, title: "The Awakening", image: movie3, year: "2024", rating: 7.8, genre: "Horror" },
  { id: 4, title: "Love's Destiny", image: movie4, year: "2023", rating: 8.2, genre: "Romance" },
];

const MovieDetail = () => {
  const { id } = useParams();
  const movieId = id ? parseInt(id) : 1;
  const movie = movieData[movieId] || movieData[1];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16">
        <div className="relative h-[60vh] overflow-hidden">
          <img
            src={movie.image}
            alt={movie.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-end pb-12">
            <div className="max-w-3xl">
              <Link to="/movies">
                <Button variant="ghost" size="sm" className="mb-4 -ml-2">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Movies
                </Button>
              </Link>
              
              <h1 className="text-5xl font-bold mb-4 text-gradient">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-foreground">{movie.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-5 w-5" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-5 w-5" />
                  <span>{movie.duration}</span>
                </div>
                <span className="text-primary">{movie.genre}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex gap-4 mb-6">
                  <Button variant="player" size="lg" className="flex-1">
                    Player 1
                  </Button>
                  <Button variant="player" size="lg" className="flex-1">
                    Player 2
                  </Button>
                </div>

                <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden relative group">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="gap-2 text-lg px-8 py-6"
                      onClick={() => window.open("https://youtu.be/3c-iBn73dDE?si=pcfbYraOHd3txwoH", "_blank")}
                    >
                      <Play className="h-6 w-6" />
                      Play Movie
                    </Button>
                  </div>
                </div>

                <div className="mt-6 bg-muted/50 rounded-lg p-4 text-center text-muted-foreground text-sm">
                  The video keeps buffering? Just pause it for 5-10 minutes then continue playing!
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">About This Movie</h2>
                <div className="space-y-3 text-muted-foreground mb-4">
                  <p><span className="text-foreground font-semibold">Country:</span> <span className="text-primary">{movie.country}</span></p>
                  <p><span className="text-foreground font-semibold">Language:</span> <span className="text-primary">{movie.language}</span></p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{movie.description}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Related Movies</h2>
              <div className="space-y-4">
                {relatedMovies.map((movie) => (
                  <MovieCard key={movie.id} {...movie} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MovieDetail;
