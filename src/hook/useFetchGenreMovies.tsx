import { useState, useEffect } from 'react';
import { fetchGenreMovies } from '@/infra/tmdb';

type GenreId = number;


const useFetchGenreMovies = (genreId: GenreId): any[] => {
  const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreMovies: any[] = await fetchGenreMovies(genreId);
        setMovies(genreMovies.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreId]);

  return movies;
};

export default useFetchGenreMovies;