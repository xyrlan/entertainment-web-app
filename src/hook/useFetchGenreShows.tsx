
import { useState, useEffect } from 'react';
import { fetchGenreShows } from '@/infra/tmdb';

type GenreId = number;

interface GenreShowsResult {
  genreShows: any[][]
}

const useFetchGenreShows = (genreIds: GenreId[]): GenreShowsResult => {
  const [genreShows, setGenreShows] = useState<any[][]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        var newGenresShows = []
        for (let i = 0; i < genreIds.length; i++) {
          const genreShowsNew: any[] = await fetchGenreShows(genreIds[i]);
          const Shows = genreShowsNew.slice(0, 20)
          newGenresShows.push(Shows)
        }
        setGenreShows(newGenresShows)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreIds]);

  return { genreShows };
};

export default useFetchGenreShows;