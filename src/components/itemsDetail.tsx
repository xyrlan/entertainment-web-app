import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStar as fasFaStar,
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import {
    faStar as farFaStar,
    faStarHalfAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
    faStar as fatFaStar,
    faFileVideo,
} from '@fortawesome/free-regular-svg-icons';



const ItemDetail = ({ item }: any) => {
    const router = useRouter();
    const [showAllCast, setShowAllCast] = useState(false);

    const [selectedVideo, setSelectedVideo] = useState<string | null>('');

    const videoRef = useRef<HTMLDivElement | null>(null);

    const handleVideoClick = (videoId: string) => {
        setSelectedVideo(videoId);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (selectedVideo && videoRef.current && videoRef.current.contains(event.target as Node)) {
            setSelectedVideo('')
        }
    };

    useEffect(() => {

        document.addEventListener('click', handleClickOutside);


        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [selectedVideo]);

    const handleGoBack = () => {
        router.back();
    };

    const handleShowMoreCast = () => {
        setShowAllCast(!showAllCast);
    };

    const ratingOutOf5: number = parseFloat(item.rating) / 2;

    // Generate star elements
    const generateStars = (rating: number) => {
        const roundedRating = Math.round(rating * 2) / 2;
        const fullStars = Math.floor(roundedRating);
        const halfStar = roundedRating % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStar;

        return (
            <>
                {Array(fullStars)
                    .fill(undefined)
                    .map((_, i) => (
                        <FontAwesomeIcon key={`full-${i}`} icon={fasFaStar} />
                    ))}
                {halfStar ? <FontAwesomeIcon icon={faStarHalfAlt} /> : null}
                {Array(emptyStars)
                    .fill(undefined)
                    .map((_, i) => (
                        <FontAwesomeIcon key={`empty-${i}`} icon={farFaStar} />
                    ))}
            </>
        );
    };

    return (

        <section id='animation-title' className='mt-4 xl:ml-8 xl:mr-8 xl:mt-16 p-2'>
            <button
                className='text-white text-left mb-6 hover:text-red hover:opacity-100 transition-all hover:scale-[1.1]'
                onClick={handleGoBack}>
                <FontAwesomeIcon className='pr-2' icon={faArrowLeft} size='xl' />
            </button>

            <div className=' text-white flex flex-col justify-center gap-6 pb-10 md:grid md:grid-cols-[1fr,_2fr] md:gap-8 md:max-w-screen-xl md:mx-auto'>
                <div>
                    <img
                        width={500}
                        height={1080}
                        className='shadow-xl shadow-black mx-auto rounded-lg  md:mx-0 max-w-[240px] md:max-w-full'
                        src={item.poster}
                        alt={item.title}
                    />
                    {selectedVideo ? (
                        <div key={selectedVideo} className={`z-20 video-overlay duration-1000 ${selectedVideo ? 'opacity-100' : 'opacity-0'}`} ref={videoRef}>
                            <iframe
                                allowFullScreen
                                className='select-none mb-4 video-iframe w-full h-full max-h-[80%] max-w-[80%]'
                                src={`https://www.youtube.com/embed/${selectedVideo}`}
                            ></iframe>
                        </div>
                    ) : (
                        <div className="mt-8 flex justify-start flex-nowrap sm:gap-10 w-full max-sm:gap-2
                overflow-x-auto touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3 snap-x">
                            {item.trailer.map((trailers: string, index: number) => (
                                <div
                                    key={trailers}
                                    onClick={() => handleVideoClick(trailers)}
                                    className='cursor-pointer'>
                                    <div className='shadow-inner  shadow-black text-white fill-white flex gap-2 hover:fill-red hover:shadow-red hover:text-red duration-300 md:mb-5 w-fit py-1 px-2 items-center rounded-xl font-light text-md space-x-2 group'>
                                    <svg className=' group-hover:animate-pulse' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M18 7c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-3.333L22 17V7l-4 3.333V7zm-1.998 10H4V7h12l.001 4.999L16 12l.001.001.001 4.999z"></path></svg>
                                         Trailer {item.trailer.length - index}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className='flex flex-col gap-4'>

                    <h1 className='text-3xl text-center md:text-left md:text-4xl xl:text-5xl'>
                        {item.title}
                    </h1>
                    <h2 className='text-greyish-blue font-light text-center md:text-left md:text-lg'>
                        {item.tagline}
                    </h2>
                    <div className='flex flex-col md:flex-row gap-4 items-center mb-4 md:mb-0'>
                        <p className='text-4xl'>{parseFloat(`${ratingOutOf5}`).toFixed(1)}</p>
                        <div className='flex text-xl text-red'>
                            {generateStars(ratingOutOf5)}{' '}
                        </div>
                    </div>
                    <div className='flex gap-12 max-sm:gap-8 mx-auto md:mx-0 items-center text-sm md:text-base'>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-greyish-blue'>Length</p>
                            <p>{item.length ? item.length + ' min.' : 'N/A'}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-greyish-blue'>Year</p>
                            <p>{item.year}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-greyish-blue'>Language</p>
                            <p className='uppercase'>{item.language}</p>
                        </div>
                        <div className='flex flex-col gap-1 items-center'>
                            <p className='text-greyish-blue'>Status</p>
                            <p>{item.status}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-xl mb-1 text-greyish-blue'>Genres</p>
                            <div className='flex gap-2 flex-wrap text-sm md:text-base'>
                                {item.genres.map((genre: any, index: number) => (
                                    <span
                                        key={index}
                                        className='cursor-pointer font-normal from-greyish-blue to-transparent p-3 bg-gradient-to-b shadow-black shadow-inner hover:bg-red text-white hover:text-dark-blue duration-300 py-1 px-2 rounded-xl text-sm tracking-wider '>
                                        {genre}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className='grid grid-flow-row '>
                            <h6 className='text-xl mb-1 text-greyish-blue'>Synopsis</h6>
                            <p className='font-extralight'>{item.synopsis}</p>
                        </div>

                        <div>
                            <h6 className='text-xl mb-2 text-greyish-blue'>Production Companies</h6>
                            <div className='flex justify-start md:gap-x-8 max-md:gap-x-2 flex-wrap from-greyish-blue to-transparent p-3 bg-gradient-to-b shadow-black shadow-inner rounded-xl hover:brightness-150 duration-500'>
                                {item.prodcompanies.map((companies: any, index: number) => (
                                    <div key={index} className='flex items-center gap-2'>
                                        <img className='h-10 mb-2' src={`https://image.tmdb.org/t/p/original${companies.logo_path}`} alt='' />
                                        {/* <div>{companies.name}</div> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col text-sm md:text-base'>
                            <p className='text-greyish-blue text-xl mb-1'>Cast</p>
                            <div className='flex justify-start max-sm:justify-between w-full gap-3 max-sm:gap-0 flex-wrap'>
                                {item.cast.map((actor: any, index: number) => {
                                    if (!showAllCast && index >= 8) return null;
                                    if (showAllCast && index > 15) return null;

                                    return (
                                        <div id='animation-title' key={actor.id} className='grid grid-flow-row max-w-[144px] justify-items-center max-md:scale-75 from-greyish-blue to-transparent bg-gradient-to-b shadow-black shadow-inner rounded-xl pb-2'>
                                            <img className='w-36 h-48 max-lg:h-40 max-md:h-36 rounded-xl shadow-black shadow' src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} alt='image not fount' />
                                            <div className='text-center flex flex-col flex-wrap'>
                                                <span
                                                    key={index}
                                                    className='text-white mb-1 text-center tracking-wider rounded-lg px-2 pt-1 text-sm'>
                                                    {actor.name}
                                                </span>
                                                <span
                                                    key={index}
                                                    className='text-red flex justify-center items-center text-center tracking-wider text-sm bg-dark-blue py-1 w-full rounded-xl shadow-sm shadow-black p-1'>
                                                    {actor.character}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}

                            </div>
                            <button
                                className='mt-2 text-white text-sm underline opacity-50'
                                onClick={handleShowMoreCast}>
                                {showAllCast ? 'Show Less' : 'Show More...'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ItemDetail;