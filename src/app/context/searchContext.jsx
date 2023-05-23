import { createContext, useState, useRef, useContext } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const searchInputRef = useRef(null);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filteredData,
        setFilteredData,
        searchInputRef,
      }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchContextProvider');
  }
  return context;
};