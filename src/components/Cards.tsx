import { useRouter } from "next/navigation";

export default function Cards({ item, handleBookmark, isBookmarked }: any) {
    const router = useRouter();



    const handlePlayClick = (category: string, id: number) => {
        if (category === 'Movie') {
            router.push(`/movie/${id}`);
        } else if (category === 'TV Series') {
            router.push(`/tv/${id}`);
        }
    };

    return (
        <div className={`rounded-lg w-full mb-8 duration-500`} key={item.title}>

            <div className={`flex justify-center items-center rounded-lg bg-cover w-full lg:h-[174px] max-lg:h-[150px] cursor-pointer relative  duration-500 ease-out`} style={{ backgroundImage: `url(${item.image})` }}>

                <div className='h-full w-full flex justify-center items-center bg-black bg-opacity-40 transition-all duration-500 opacity-0 hover:opacity-100 ease-out rounded-lg '>

                    <div
                        onClick={() => handlePlayClick(item.category, item.id)}
                        className='select-none flex items-center absolute gap-5 h-12 w-28 p-2 rounded-full bg-gray-400 hover:bg-white bg-opacity-30 fill-white hover:fill-red hover:text-red duration-300 ease-in'>
                        <svg className='' width="30" height="30" xmlns="http://www.w3.org/2000/svg"><path d="M15 0C6.713 0 0 6.713 0 15c0 8.288 6.713 15 15 15 8.288 0 15-6.712 15-15 0-8.287-6.712-15-15-15Zm-3 21V8l9 6.5-9 6.5Z" /></svg>
                        <p className='font-semibold'>Play</p>
                    </div>

                </div>

                <div id='bookmark' className={`rounded-full bg-black hover:bg-white hover:bg-opacity-80 bg-opacity-40 w-8 h-8 absolute cursor-pointer right-3 top-3 flex items-center justify-center hover:stroke-black stroke-white fill-transparent duration-300 ease-in  ${isBookmarked ? 'fill-white hover:stroke-white hover:bg-black' : ''
                    }`}
                    onClick={() => { handleBookmark(item) }}>

                    <svg className='' width="12" height="14" xmlns="http://www.w3.org/2000/svg"><path d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z" stroke-width="1.5" /></svg>

                </div>


            </div>
            <ul className='flex items-center gap-2 sm:text-sm max-sm:text-xs text-greyish-blue mt-1 select-none max-h-5'>
                <li>{item.year}</li>
                <li>
                    <div className='flex items-center gap-1'>
                        <span className='bullet bg-greyish-blue' /> {/* Estilo de marcador personalizado */}
                        <img src={`${item.category === "Movie" ? '/images/icon-category-movie.svg' : '/images/icon-category-movie.svg'}`} />
                        <p>{item.category}</p>
                    </div>
                </li>
                <li className='flex items-center'><span className='bullet bg-greyish-blue' />{item.rating}</li>
            </ul>
            <h1 className='font-semibold'>{item.title}</h1>
            <div>

            </div>
        </div>
    )
}