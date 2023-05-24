import { useState, useEffect } from 'react';
import { fetchGenreShows } from '@/infra/tmdb';

type GenreId = number;


const useFetchGenreShows = (genreId: GenreId): any[] => {
    const [shows, setShows] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const genreShows: any = await fetchGenreShows(genreId);
        setShows(genreShows.filter((shows: any) => shows.vote_average > 7));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [genreId]);

  return shows;
};

export default useFetchGenreShows;