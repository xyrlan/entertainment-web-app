
import { useEffect } from "react";

const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original/';
const BASE_URL = 'https://api.themoviedb.org/3/';
const TMDB_API_KEY = '94336ccdc9e2add3bab1e3dc33dc881a'


export const fetchData = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  };
  
  const buildUrl = (path: string, queryParams: URLSearchParams): string => {
    const url = new URL(`${BASE_URL}${path}`);
    queryParams.set('api_key', TMDB_API_KEY);
    url.search = queryParams.toString();
    return url.href;
  };
  
  const fetchMoviesByPath = async (path: string) => {
    const url = buildUrl(path, new URLSearchParams());
    return fetchData(url);
  };
  
  export const fetchPopularMovies = async () => {
    return fetchMoviesByPath('movie/popular');
  };



// const movies = await fetchData(fetchPopularMovies);

// const logMovies = async () => {
//     const movies = await fetchPopularMovies();
//     console.log(movies);
//   };

//   logMovies()

