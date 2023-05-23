import { useState, useEffect } from 'react';

interface Movie {
    category: string;
    id: number;
    title: string;
    image: string;
    year: string;
    rating: 'Adult' | 'E';
    genreIds: number[];
    vote_average: number;
    trailer: string;
  }


interface FetchDataResponse {
  data: Movie[];
  isLoading: boolean;
}

const useFetchData = (fetchFunction: () => Promise<Movie[]>): FetchDataResponse => {
  const [data, setData] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData.slice(0, 40));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [fetchFunction]);

  return { data, isLoading };
};

export default useFetchData;