"use client"
import { useContext } from 'react';
import { BookmarksProvider } from '../context/bookmarksProvider';
import { SearchContext } from '../context/searchContext';
import FilteredData from '@/components/FilteredData';
import Cards from '@/components/Cards';
import SearchBar from '@/components/Searchbar';
import Navbar from '@/components/Navbar';

const Bookmarks = () => {
  const { bookmarks, handleBookmark } = BookmarksProvider();
  const { query, filteredData } = useContext(SearchContext);

  const bookmarkedMovies = bookmarks.filter(
    (item) => item.category === 'Movies'
  );

  const bookmarkedTVSeries = bookmarks.filter(
    (item) => item.category === 'TV Series'
  );

  return (
    <div className='text-white h-screen font-outfit'>

      <Navbar />

      <main id='animation-title' className='max-lg:px-8 lg:pl-40 max-sm:px-2 lg:pr-8 z-10'>
        <SearchBar currentPage='bookmarks' />
        {query && <FilteredData data={filteredData} />}
        {!query && (
          <>
            <section>
              <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
                Bookmarked Movies
              </h2>
              <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 '>
                {bookmarkedMovies.map((item, index) => (
                  <Cards
                    key={`${item.id}${index}`}
                    item={item}
                    bookmarks={bookmarks}
                    handleBookmark={handleBookmark}
                  />
                ))}
              </ul>
            </section>
            <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
              Bookmarked TV Series
            </h2>
            <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4'>
              {bookmarkedTVSeries.map((item, index) => (
                <Cards
                  key={`${item.id}${index}`}
                  item={item}
                  bookmarks={bookmarks}
                  handleBookmark={handleBookmark}
                />
              ))}
            </ul>
          </>
        )}
      </main>
    </div>
  );
};

export default Bookmarks;
