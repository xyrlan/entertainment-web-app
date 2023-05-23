"use client"
import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/Navbar';
import TrendingCarousel from '@/components/carrosselmovies';
import { msArrayOutTrend } from '@/infra/movies';
import { msArraysModified } from '@/infra/movies';
import SearchBar from '@/components/Searchbar';
import useBookmark from '@/hook/bookmarkHook';

import { BookmarksProvider } from './context/bookMarksContext';

import useFetchTrailers from '@/hook/useFetchTrailers';
import useFetchData from '@/hook/useFetchData';
import { fetchPopularMovies, fetchPopularShows, fetchTopRatedMovies, fetchTopRatedShows } from '@/infra/tmdb';
import Cards from '@/components/Cards';


export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  const { bookmarks, handleBookmark  } = BookmarksProvider();


  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };

  let filteredMovies = msArrayOutTrend.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredMovies.length < 20) {
    filteredMovies = msArraysModified.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

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

  const { data: movies, isLoading: isMoviesLoading } =
    useFetchData(fetchPopularMovies);

  console.log(movies);

  const { data: series, isLoading: isShowsLoading } =
    useFetchData(fetchPopularShows);

  const { data: topmovies, isLoading: isTopMoviesLoading } =
    useFetchData(fetchTopRatedMovies);

  console.log(topmovies);

  const { data: topseries, isLoading: isTopSeriesLoading } =
    useFetchData(fetchTopRatedShows);


  // async function fetchMovieTrailers() {
  //   try {
  //     const trailersData = await Promise.all(
  //       movies.map(async (trailer) => {
  //         const response = await fetch(`https://api.themoviedb.org/3/movie/${trailer.id}/videos?api_key=94336ccdc9e2add3bab1e3dc33dc881a`);
  //         return await response.json();
  //       })
  //     );

  //     return trailersData;
  //   } catch (error) {
  //     console.error('Ocorreu um erro:', error);
  //     throw error;
  //   }

  // }


  const renderMS = (title: string, items: Movie[], toptitle: string, topitems: Movie[]) => (
    <>

      <h1 className='text-2xl my-6 font-light'>{toptitle}</h1>
      <div className='lg:h-[250px] max-lg:h-[230px] max-sm:h-[200px] w-full overflow-x-auto touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3 snap-x' dir='ltr' >

        <div className='flex justify-start flex-nowrap sm:gap-10 w-full max-sm:gap-2 scrollbar' dir='ltr' >
          {topitems.map((topitem, index) => (
            <TrendingCarousel key={topitem.id} 
            topitem={topitem} 
            handleBookmark={handleBookmark} 
            isBookmarked={bookmarks.some((bookmark: any | null) => bookmark.id === topitem.id)}
            />
          ))}

        </div>
      </div>


      <h1 className={`text-2xl my-6 font-light duration-300 transition-all ${filteredMovies.length >= 0 && filteredMovies.length < 24 ? 'opacity-0 h-0 my-0' : 'opacity-100 h-full'}`}>{title}</h1>

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

        <main className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>
          <SearchBar onSearch={handleSearch} />
          {renderMS('Popular Movies', movies, 'Top Rated Movies', topmovies)}
          {renderMS('Popular Series', series, 'Top Rated Series', topseries)}

        </main>


      </div>

    </>
  )
}
