"use client"
import React from 'react';
import { useState, useContext } from 'react';
import Navbar from '@/components/Navbar';
import SearchBar from '@/components/Searchbar';
import FilteredData from '@/components/FilteredData';
import { SearchContext } from './context/searchContext';


import { BookmarksProvider } from './context/bookmarksProvider';


import useFetchData from '@/hook/useFetchData';
import { fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows } from '@/infra/tmdb';
import Cards from '@/components/Cards';
import CaroselItems from '@/components/CaroselItems';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const { query, filteredData }: any = useContext(SearchContext);

  const { bookmarks, handleBookmark } = BookmarksProvider();

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  interface Movie {
    category: string;
    id: number;
    title: string;
    image: string;
    year: string;
    rating: 'Adult' | 'E';
    genreIds: number[];
    vote_average: number;
  }


  interface FetchDataResponse {
    data: Movie[];
    isLoading: boolean;
  }

  const { data: movies, isLoading: isMoviesLoading } =
    useFetchData(fetchPopularMovies);

  const { data: series, isLoading: isShowsLoading } =
    useFetchData(fetchPopularShows);

  const { data: topmovies, isLoading: isTopMoviesLoading } =
    useFetchData(fetchTopRatedMovies);


  const { data: topseries, isLoading: isTopSeriesLoading } =
    useFetchData(fetchTopRatedShows);



  const renderMS = (title: string, items: Movie[], toptitle: string, topitems: Movie[]) => (
    <>
      <h1 id='animation-title' className='w-full text-4xl my-6 font-light'>{toptitle}</h1>
      <div className='lg:h-[250px] max-lg:h-[230px] max-sm:h-[200px] w-full overflow-x-auto touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3 snap-x' dir='ltr' >

        <div className='flex justify-start flex-nowrap sm:gap-10 w-full max-sm:gap-2 scrollbar' dir='ltr' >
          {topitems.map((topitem, index) => (
            <CaroselItems key={topitem.id}
              topitem={topitem}
              handleBookmark={handleBookmark}
              isBookmarked={bookmarks.some((bookmark: any | null) => bookmark.id === topitem.id)}
            />
          ))}
        </div>
        
      </div>

      <h1 id='animation-title' className={`text-4xl my-6 font-light duration-300 transition-all`}>{title}</h1>

      <div className='grid grid-cols-4 w-full max-xl:grid-cols-3 max-sm:grid-cols-2 gap-x-6'>

        {items.map((item, index) => (
          <Cards
            key={item.id}
            item={item}
            handleBookmark={handleBookmark}
            isBookmarked={bookmarks.some((bookmark: any | null) => bookmark.id === item.id)}
          />

        ))}
      </div>
    </>
  )

  return (
    <>
      <div className='text-white h-screen font-outfit'>

        <Navbar />

        <main id='animation-title' className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>
          <SearchBar onSearch={handleSearch} />
          {query && <FilteredData data={filteredData} />}
          {!query && (
            <>
              {renderMS('Popular Movies', movies, 'Top Rated Movies', topmovies)}
              {renderMS('Popular Series', series, 'Top Rated Series', topseries)}
            </>
          )}
        </main>


      </div>

    </>
  )
}
