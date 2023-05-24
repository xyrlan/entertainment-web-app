"use client"
import React from 'react';
import { useState, useEffect, useContext, useCallback } from 'react';


import Navbar from '@/components/Navbar';
import CaroselDeGeneros from '@/components/GenreSection';
import SearchBar from '@/components/Searchbar';
import FilteredData from '@/components/FilteredData';

import { SearchContext } from '../context/searchContext';
import { BookmarksProvider } from '../context/bookmarksProvider';

import { fetchCurrentlyAiringShows } from '@/infra/tmdb';
import useFetchGenreShows from '@/hook/useFetchGenreShows';



const genres = [
  { id: 10759, name: 'Action & Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 10762, name: 'Kids' },
  { id: 9648, name: 'Mystery' },
  { id: 10763, name: 'News' },
  { id: 10764, name: 'Reality' },
  { id: 10765, name: 'Sci-Fi & Fantasy' },
  { id: 10766, name: 'Soap' },
  { id: 10767, name: 'Talk' },
  { id: 10768, name: 'War & Politics' },
  { id: 37, name: 'Western' },
];


export default function Shows() {
  const { bookmarks, handleBookmark } = BookmarksProvider();
  const { query, filteredData } = useContext(SearchContext);
  const [airingShows, setAiringShows] = useState<any[]>([]);
  const { genreShows } = useFetchGenreShows(genres.map((item) => item.id))
  useEffect(() => {
    const getAiringShows = async () => {
      try {
        const airingShows = await fetchCurrentlyAiringShows();
        setAiringShows(
          airingShows.sort((a, b) => b.vote_average - a.vote_average)
        );
      } catch (error) {
        console.log(error);
      }
    };
    getAiringShows();
  }, []);


  return (
    <>


      <Navbar />

      <main className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>

        <SearchBar currentPage='tv-series' />
        {query && <FilteredData data={filteredData} />}
        {!query && (
          <>
            <CaroselDeGeneros
              title='Currently Airing'
              items={airingShows}
              bookmarks={bookmarks}
              handleBookmark={handleBookmark}
            />

            {genreShows.map((items: any, index: number) => (
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
