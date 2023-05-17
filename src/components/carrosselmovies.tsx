import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import movies from '@/infra/movies';

const TrendingCarousel = () => {


    return (
        <div className='h-[250px] overflow-x-auto touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3 snap-x' dir='ltr' >
            
            <div className='flex justify-start flex-nowrap gap-10 w-[2510px] scrollbar' dir='ltr' >
                {movies.imageTrending.map((movie, index) => (

                    <div className='snap-start h-[230px] bg-cover w-full rounded-lg relative p-4' key={index} style={{ backgroundImage: `url(${movie})` }}>

                        <div className='rounded-full bg-black bg-opacity-40 w-8 h-8 cursor-pointer absolute right-4 flex items-center justify-center hover:fill-white fill-transparent duration-300 ease-in'>
                            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke="#FFF" stroke-width="1.5"/></svg>
                        </div>

                        <div className='h-full items-end flex '>
                            <h1 className='text-xl font-semibold'>{movies.titleTrending[index]}</h1>
                        </div>

                    </div>
                ))}
                {/* <div className='h-[230px]'></div> */}
            </div>
        </div>
    );
};

export default TrendingCarousel;