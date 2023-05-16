"use client"
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

import Navbar from '@/components/Navbar';
import UserIcon from '@/components/userIcon';
import movies from '@/infra/movies';



export default function Home() {




  return (
    <>
      <main className='text-white h-full w-full'>

        <Navbar />



        <div>
          {movies.imageLarge.map((movie, index) => (
            <div key={index}>
              <img src={movie} alt={movies.imageName[index]} />
              <h1>{movies.title[index]}</h1>
            </div>
          ))}
        </div>



      </main>
    </>
  )
}
