import { useContext } from 'react';
import { SearchContext } from '@/app/context/searchContext';
import { BookmarksProvider } from '@/app/context/bookmarksProvider';
import Cards from './Cards';

const FilteredData = ({ data }: any) => {
    const {bookmarks, handleBookmark} = BookmarksProvider();
    const { query } = useContext(SearchContext);

  if (!Array.isArray(data)) {
    return null;
  }

  const resultCount = data.length;
  const queryDisplay = query ? `'${query}'` : '';

  return (
    <div className='pb-10'>
      <h2 className='text-white text-xl md:text-[32px] font-light mt-6 xl:mt-[34px] mb-4 md:mb-6 xl:mb-8'>
        Found {resultCount} results for {queryDisplay}
      </h2>
      <ul className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-[30px] xl:gap-4'>
        {data.map((item, index) => (
          <Cards
            key={`${item.id}${index}`}
            item={item}
            bookmarks={bookmarks}
            handleBookmark={handleBookmark}
          />
        ))}
      </ul>
    </div>
  );
};

export default FilteredData;