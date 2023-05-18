"use client"
import { useState, useEffect } from 'react';

import Navbar from '@/components/Navbar';
import { movies } from '@/infra/movies';
import SearchBar from '@/components/Searchbar';
import useBookmark from '@/hook/bookmarkHook';


export default function Movies() {
  const [searchQuery, setSearchQuery] = useState('');

  const { selectedMovies, handleBookmark } = useBookmark();

  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };


  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <>
      <body className='text-white h-screen font-outfit'>

        <Navbar />

        <main className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>

          <SearchBar onSearch={handleSearch} />

          {filteredMovies.length >= 0 && filteredMovies.length < 11 ? (
            <div className='my-4 font-extralight text-3xl max-md:text-xl'>
              Found {filteredMovies.length} {filteredMovies.length === 1 ? 'result' : 'results'} for "{searchQuery}"
            </div>
          ) : null}

          <h1 className={`text-2xl my-6 font-light duration-300 transition-all ${filteredMovies.length >= 0 && filteredMovies.length < 11 ? 'opacity-0 h-0 my-0' : 'opacity-100 h-full'}`}>Movies</h1>

          <div className='grid grid-cols-4 w-full max-xl:grid-cols-3 max-sm:grid-cols-2 gap-x-6'>

            {filteredMovies.map((movie, index) => (
              <div className={`rounded-lg w-full mb-8 duration-500 ${searchQuery ? '' : 'opacity-100'}`} key={movie.title}>

                <div className={`flex justify-center items-center rounded-lg bg-cover w-full lg:h-[174px] max-lg:h-[150px] cursor-pointer relative  duration-500 ease-out`} style={{ backgroundImage: `url(${movie.imageLarge})` }} >

                  <div className='h-full w-full flex justify-center items-center bg-black bg-opacity-40 transition-all duration-500 opacity-0 hover:opacity-100 ease-out rounded-lg'>

                    <div className='select-none flex items-center absolute gap-5 h-12 w-28 p-2 rounded-full bg-gray-400 hover:bg-white bg-opacity-30 fill-white hover:fill-red hover:text-red duration-300 ease-in'>
                      <svg className='' width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" /></svg>
                      <p className='font-semibold'>Play</p>
                    </div>

                  </div>

                  <div id='bookmark' className={`rounded-full bg-black hover:bg-white hover:bg-opacity-80 bg-opacity-40 w-8 h-8 absolute cursor-pointer right-3 top-3 flex items-center justify-center hover:stroke-black stroke-white fill-transparent duration-300 ease-in ${selectedMovies.includes(movie.title) ? 'fill-white hover:stroke-white hover:bg-black' : ''
                    }`}
                    onClick={() => handleBookmark(movie.title)}>

                    <svg className='' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.11-4.535 4.426L.75 1.036l9.768-.285Z" stroke-width="1.5" /></svg>

                  </div>

                </div>

                <ul className='flex gap-6 text-sm text-greyish-blue mt-1 select-none'>
                  <li className=''>{movie.date}</li>
                  <li className='list-disc '> <div className='flex items-center gap-1'><img src={`${movie.category}`} /> <p>{movie.type}</p></div></li>
                  <li className='list-disc'>{movie.indication}</li>
                </ul>
                <h1 className='font-semibold'>{movie.title}</h1>


              </div>
            ))}
          </div>
        </main>


      </body>
    </>
  )
}
