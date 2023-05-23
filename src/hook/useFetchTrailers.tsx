import { useState, useEffect } from 'react';

// interface Movie {
//     category: string;
//     id: number;
//     title: string;
//     image: string;
//     year: string;
//     rating: 'Adult' | 'E';
//     genreIds: number[];
//     vote_average: number;
//     trailer: string;
//   }


interface FetchDataResponse {
  data: any[];
  isLoading: boolean;
}

const useFetchTrailers= (fetchFunction: () => Promise<any[]>): FetchDataResponse => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData.slice(0, 20));
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

export default useFetchTrailers;