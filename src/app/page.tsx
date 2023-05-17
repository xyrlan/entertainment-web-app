"use client"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';
import { useState } from 'react';

import Navbar from '@/components/Navbar';
import movies from '@/infra/movies';
import TrendingCarousel from '@/components/carrosselmovies';
import SearchBar from '@/components/Searchbar';



export default function Home() {



  return (
    <>
      <body className='text-white h-screen'>

        <Navbar />

        <main className='pl-40 pr-8 z-10'>
         
          <h1 className='text-2xl my-4 font-light'>Trending</h1>
          <TrendingCarousel />


          <h1 className='text-2xl my-4 font-light'>Recommended for you</h1>

          <div className='flex flex-wrap justify-between items-center'>

            {movies.imageLarge.map((movie, index) => (
              <div className=' rounded-lg w-[280px] mb-8' key={index}>

                <div className='rounded-lg bg-cover w-full h-[174px] relative' style={{ backgroundImage: `url(${movie})` }} >

                  <div className='rounded-full bg-black bg-opacity-40 w-8 h-8 absolute cursor-pointer right-3 top-3 flex items-center justify-center hover:scale-105 hover:fill-white fill-transparent duration-300 ease-in'>

                    <svg className='' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5" /></svg>

                  </div>

                </div>
                <h1 className='font-semibold'>{movies.title[index]}</h1>
              </div>
            ))}
          </div>
        </main>


      </body>
    </>
  )
}
