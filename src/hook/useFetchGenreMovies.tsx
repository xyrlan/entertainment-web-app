
import { useState, useEffect } from 'react';
import { fetchGenreMovies } from '@/infra/tmdb';

type GenreId = number;

interface GenreMoviesResult {
  genreMovies: any[][]
}

const useFetchGenreMovies = (genreIds: GenreId[]): GenreMoviesResult => {
  const [genreMovies, setGenreMovies] = useState<any[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var newGenresMovies = []
        for (let i = 0; i < genreIds.length; i++) {
          const genreMoviesNew: any[] = await fetchGenreMovies(genreIds[i]);
          const movies = genreMoviesNew.slice(0, 20)
          newGenresMovies.push(movies)
        }
        setGenreMovies(newGenresMovies)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreIds]);

  return { genreMovies };
};

export default useFetchGenreMovies;