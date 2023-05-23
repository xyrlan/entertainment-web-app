import { createContext, useEffect, useState, ReactNode } from 'react';

interface Bookmark {
  id: number;
  // Outras propriedades do objeto Bookmark
}

export const BookmarksProvider = () => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  // Load bookmarks from local storage after component mounts
  useEffect(() => {
    const localBookmarks = localStorage.getItem('bookmarks');
    if (localBookmarks) {
      setBookmarks(JSON.parse(localBookmarks));
    }
  }, []);

  const handleBookmark = (item: Bookmark) => {
    setBookmarks((prevBookmarks) => {
      const bookmarkExists = prevBookmarks.some(
        (bookmark) => bookmark.id === item.id
      );

      let updatedBookmarks: Bookmark[];
      if (bookmarkExists) {
        updatedBookmarks = prevBookmarks.filter(
          (bookmark) => bookmark.id !== item.id
        );
      } else {
        updatedBookmarks = [...prevBookmarks, item];
      }

      // Save updated bookmarks to local storage
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      return updatedBookmarks;
    });
  };

  return { bookmarks, handleBookmark };
};