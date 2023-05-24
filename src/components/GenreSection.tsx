import CaroselItems from "./CaroselItems";


const GenreSection = ({ title, items, bookmarks, handleBookmark }:{
  title: string
  items: any[]
  bookmarks: any[]
  handleBookmark: (item: any) => void
  
}) => {

  return (
    <section>
      <h2 id='animation-title-delayed' className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        {title}
      </h2>
      <div className='flex overflow-x-scroll hide-scroll-bar snap-x snap-mandatory touch-auto scrollbar-track-transparent scroll-smooth scrollbar-thumb-semi-dark-blue scrollbar-thin scroll-pl-3'>
        <div className='flex flex-nowrap'>
          <ul className='flex gap-4 md:gap-10 flex-nowrap'>
            {items.map((item: any, index: number) => (
              <CaroselItems
                key={`${item.id}${index}`}
                topitem={item}
                bookmarks={bookmarks}
                handleBookmark={handleBookmark}
                isBookmarked={bookmarks.some((bookmark: any | null) => bookmark.id === item.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GenreSection;