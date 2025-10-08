import { Link } from "react-router-dom";
import { Play, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MovieCardProps {
  id: number;
  title: string;
  image: string;
  year: string;
  rating: number;
  genre: string;
}

const MovieCard = ({ id, title, image, year, rating, genre }: MovieCardProps) => {
  return (
    <Link to={`/movie/${id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-card border border-border card-hover">
        <div className="aspect-[2/3] relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="hero" size="lg" className="gap-2">
              <Play className="h-5 w-5" />
              Watch Now
            </Button>
          </div>

          <div className="absolute top-2 right-2 flex items-center gap-1 bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md">
            <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
            <span className="text-sm font-bold">{rating}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-1">{title}</h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{year}</span>
            <span className="text-primary">{genre}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
