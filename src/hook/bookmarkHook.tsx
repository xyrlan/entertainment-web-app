import { useEffect, useState } from 'react';

const useBookmark = () => {
  const [selectedMovies, setSelectedMovies] = useState<string[]>([]);

  const handleBookmark = (title: string) => {
    const isSelected = selectedMovies.includes(title);
    if (isSelected) {
      setSelectedMovies(selectedMovies.filter((movie) => movie !== title));
    } else {
      setSelectedMovies([...selectedMovies, title]);
    }
  };

  useEffect(() => {
    const savedSelectedMovies = localStorage.getItem('selectedMovies');
    if (savedSelectedMovies) {
      setSelectedMovies(JSON.parse(savedSelectedMovies));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));
  }, [selectedMovies]);

  return { selectedMovies, handleBookmark };
};

export default useBookmark;