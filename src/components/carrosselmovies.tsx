import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { msArrayTrendModified } from '@/infra/movies';


const TrendingCarousel = () => {


    return (
        <div className='h-[250px] overflow-x-auto touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3 snap-x' dir='ltr' >

            <div className='flex justify-start flex-nowrap gap-10 w-[2510px] scrollbar' dir='ltr' >
                {msArrayTrendModified.map((movie, index) => (

                    <div className='snap-start h-[230px] bg-cover w-full rounded-lg relative ' key={index} style={{ backgroundImage: `url(${movie.trendLargeImage})` }}>

                        <div className='h-full w-full flex justify-center items-center hover:bg-black hover:bg-opacity-40 transition-all duration-500 group ease-out relative rounded-lg p-4'>

                            <div className='flex items-center absolute gap-5 h-12 w-28 p-2 rounded-full bg-gray-400 hover:bg-white bg-opacity-30 fill-white hover:fill-red hover:text-red opacity-0 group-hover:opacity-100 duration-300 ease-in cursor-pointer'>
                                <svg className='' width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" /></svg>
                                <p className='font-semibold'>Play</p>
                            </div>

                            <div className='self-start rounded-full bg-black hover:bg-white hover:bg-opacity-80 bg-opacity-40 w-8 h-8 cursor-pointer absolute right-4 flex items-center justify-center hover:stroke-black stroke-white fill-transparent duration-300 ease-in'>
                                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke-width="1.5" /></svg>
                            </div>

                            <div className='h-full w-full justify-end items-start flex flex-col select-none cursor-pointer'>
                                <ul className='flex gap-6 text-sm text-white opacity-90 mt-1'>
                                    <li className=''>{movie.date}</li>
                                    <li className='list-disc'> <div className='flex items-center gap-1'><img src={`${movie.category}`} /> <p>{movie.type}</p></div></li>
                                    <li className='list-disc'>{movie.indication}</li>
                                </ul>
                                <h1 className='text-xl font-semibold'>{movie.title}</h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrendingCarousel;