import { boolean } from "zod";

const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';
const BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_API_KEY = '94336ccdc9e2add3bab1e3dc33dc881a';

const fetchData = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }
  return await response.json();

};

interface ProcessedItem {
  id: number;
  title: string;
  category: 'Movie' | 'TV Series';
  image: string;
  year: string;
  rating: 'Adult' | 'E';
  genreIds: number[];
  vote_average: number;
}

const processData = (results: any[], requireBackdrop = false): ProcessedItem[] => {
  const items = requireBackdrop
    ? results.filter((item) => item.backdrop_path)
    : results;

  return items.map((item) => ({
    id: item.id,
    title: item.title || item.name,
    category: item.title ? 'Movie' : 'TV Series',
    image: item.backdrop_path
      ? `${TMDB_IMAGE_ENDPOINT}${item.backdrop_path}`
      : `${TMDB_IMAGE_ENDPOINT}${item.poster_path}`,
    year:
      item.release_date?.slice(0, 4) ||
      item.first_air_date?.slice(0, 4) ||
      'N/A',
    rating: item.adult ? 'Adult' : 'E',
    genreIds: item.genre_ids,
    vote_average: item.vote_average,

  }));
};

const buildUrl = (path: string, queryParams: URLSearchParams) => {
  const url = new URL(`${BASE_URL}${path}`);
  queryParams.set('api_key', TMDB_API_KEY);
  // queryParams.set('language', 'en-US');
  url.search = queryParams.toString();
  return url.href;
};

const fetchGenreItems = async (path: string, genreId: number) => {
  const queryParams = new URLSearchParams({ with_genres: genreId.toString() });
  const url = buildUrl(path, queryParams);
  const data = await fetchData(url);
  return processData(data.results);
};

export const search = async (query: string) => {
  const url = buildUrl('/search/multi', new URLSearchParams({ query }));

  const data = await fetchData(url);
  const filteredData = data.results.filter(
    (item: any) => item.backdrop_path !== null && item.backdrop_path !== undefined
  );
  return processData(filteredData);
};

export const fetchTrendingAllWeek = async () => {
  const url = buildUrl('/trending/all/week', new URLSearchParams());
  const data = await fetchData(url);
  return processData(data.results);
};


const fetchMoviesByPath = async (
  path: string,
  mediaType = 'movie',
  requireBackdrop = false
) => {
  const url = buildUrl(path, new URLSearchParams());
  const data = await fetchData(url);
  const processedData = processData(data.results, requireBackdrop);

  return processedData.map((item) => ({
    ...item,
    category: mediaType === 'movie' ? 'Movie' : 'TV Series',
  }));
};


export const fetchPopularMovies = async () => {
  return fetchMoviesByPath('/movie/popular', 'movie', true);
};

export const fetchUpcomingMovies = async () => {
  return fetchMoviesByPath('/movie/upcoming');
};

export const fetchTopRatedMovies = async () => {
  return fetchMoviesByPath('/movie/top_rated');
};

export const fetchGenreMovies = async (genreId: number) => {
  return fetchGenreItems('/discover/movie', genreId);
};


const fetchTVSeriesByPath = async (
  path: string,
  requireBackdrop = false,
  queryParams = new URLSearchParams()
) => {
  const url = buildUrl(path, queryParams);
  const data = await fetchData(url);
  return processData(data.results, requireBackdrop).map((item) => ({
    ...item,
    category: 'TV Series',
  }));
};

export const fetchPopularShows = async () => {
  const countries = ['US', 'UK', 'CA'];
  const popularShowsByCountry = await Promise.all(
    countries.map(async (country) => {
      const queryParams = new URLSearchParams({ with_origin_country: country });
      return fetchTVSeriesByPath('/tv/popular', true, queryParams);
    })
  );

  const popularShows = Array.from(
    new Set(popularShowsByCountry.flat().map((show) => JSON.stringify(show)))
  ).map((show) => JSON.parse(show));

  return popularShows;
};

const originCountries = ['US', 'UK', 'CA', 'AU'];

const fetchShowsByCountries = async (path: string, requireBackdrop = false) => {
  const showsByCountry = await Promise.all(
    originCountries.map(async (country) => {
      const queryParams = new URLSearchParams({ with_origin_country: country });
      return fetchTVSeriesByPath(path, requireBackdrop, queryParams);
    })
  );

  const shows = Array.from(
    new Set(showsByCountry.flat().map((show) => JSON.stringify(show)))
  ).map((show) => JSON.parse(show));

  return shows;
};

export const fetchCurrentlyAiringShows = async () => {
  return fetchShowsByCountries('/tv/on_the_air');
};

export const fetchTopRatedShows = async () => {
  return fetchShowsByCountries('/tv/top_rated');
};

export const fetchGenreShows = async (genreId: number) => {
  const path = '/discover/tv';
  const showsByCountry = await Promise.all(
    originCountries.map(async (country) => {
      const queryParams = new URLSearchParams({
        with_genres: genreId.toString(),
        with_origin_country: country,
      });
      return fetchTVSeriesByPath(path, false, queryParams);
    })
  );

  const shows = Array.from(
    new Set(showsByCountry.flat().map((show) => JSON.stringify(show)))
  ).map((show) => JSON.parse(show));

  return shows;
};

const fetchItemCredits = async (id: string, itemType: string) => {
  const creditsUrl = buildUrl(
    `/${itemType}/${id}/credits`,
    new URLSearchParams()
  );
  const creditsData = await fetchData(creditsUrl);
  return creditsData.cast.map((actor: any) => actor);
};

const fetchTrailers = async (id: string, itemType: string) => {
  const trailersUrl = buildUrl(`/${itemType}/${id}/videos`, new URLSearchParams());
  const trailersData = await fetchData(trailersUrl);
  const filteredTrailers = trailersData.results.filter((trailer: any) => trailer.type === "Trailer" && trailer.official === true );
  return filteredTrailers.map((trailer: any) => trailer.key);

}

export const fetchItemDetails = async (id: string, category: any) => {
  const itemType = category === 'Movie' ? 'movie' : 'tv';

  const detailsUrl = buildUrl(`/${itemType}/${id}`, new URLSearchParams());
  const detailsData = await fetchData(detailsUrl);
  const cast = await fetchItemCredits(id, itemType);
  const trailer = await fetchTrailers(id, itemType);
  const trailersUrl = buildUrl(`/${itemType}/${id}/videos`, new URLSearchParams());
  const trailersData = await fetchData(trailersUrl)

  const item = {
    title: detailsData.title || detailsData.name,
    poster: `${TMDB_IMAGE_ENDPOINT}${detailsData.poster_path}`,
    length: detailsData.runtime || detailsData.episode_run_time || null,
    language: detailsData.original_language,
    year:
      detailsData.release_date?.slice(0, 4) ||
      detailsData.first_air_date?.slice(0, 4),
    synopsis: detailsData.overview,
    rating: detailsData.vote_average,
    genres: detailsData.genres.map((genre: any) => genre.name),
    tagline: detailsData.tagline,
    status: detailsData.status,
    profileimage: `${TMDB_IMAGE_ENDPOINT}${cast.profile_path}`,
    cast: cast,
    trailer: trailer,
    prodcompanies: detailsData.production_companies,


  };

  return item;
};

// export async function fetchDetails() {fetchData('https://api.themoviedb.org/3/movie/882569?api_key=94336ccdc9e2add3bab1e3dc33dc881a')}
// fetchDetails()
