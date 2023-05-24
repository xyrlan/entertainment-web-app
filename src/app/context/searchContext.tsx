"use client"
import { createContext, useState, useRef, useContext } from 'react';

export const SearchContext = createContext<any | null>(null);

const SearchContextProvider = ({ children }: any) => {
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        filteredData,
        setFilteredData,
        searchInputRef,
      }}
    >
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

