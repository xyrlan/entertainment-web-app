"use client"
import { useContext } from 'react';

import Navbar from '@/components/Navbar';

import CaroselDeGeneros from '@/components/GenreSection';

import SearchBar from '@/components/Searchbar';
import FilteredData from '@/components/FilteredData';

import { SearchContext } from '../context/searchContext';
import { BookmarksProvider } from '../context/bookmarksProvider';

import useFetchGenreMovies from '@/hook/useFetchGenreMovies';
import { fetchGenreMovies } from '@/infra/tmdb';



const genres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];


export default function Movies() {
  const { bookmarks, handleBookmark } = BookmarksProvider();
  const { query, filteredData } = useContext(SearchContext);
  const { genreMovies } = useFetchGenreMovies(genres.map((item) => item.id))

  return (
    <>

      <Navbar />

      <main className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>

        <SearchBar currentPage='movies' />
        {query && <FilteredData data={filteredData} />}
        {!query && (
          <>


            {genreMovies.map((items: any, index: number) => (
              <CaroselDeGeneros
                key={genres[index].id}
                title={genres[index].name}
                items={items}
                bookmarks={bookmarks}
                handleBookmark={handleBookmark}

              />

            ))}


          </>
        )}
      </main>

    </>
  )
}
