"use client"
import { useEffect, useContext } from "react";
import { SearchContext } from "@/app/context/searchContext";
import { useSearch } from "@/app/context/searchContext";
import { BookmarksProvider } from "@/app/context/bookmarksProvider";
import { search } from "@/infra/tmdb";




export default function SearchBar({ currentPage }: any) {

    const { query, setQuery, setFilteredData }: any = useContext(SearchContext);
    const { searchInputRef } = useSearch();
    const { bookmarks, handleBookmark } = BookmarksProvider();


    // Clear the search query when the component is unmounted
    useEffect(() => {
        return () => {
            setQuery('');
        };
    }, []);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        setFilteredData(query);
    };

    const handleChange = async (e: any) => {
        const value = e.target.value.toLowerCase();

        setQuery(value);

        

        if (value.trim() === '') {
            setFilteredData([]);
            return;
        }

        try {
            const searchData = await search(value);

            let filteredData = searchData;
            if (currentPage === 'movies') {
                filteredData = searchData.filter((item) => item.category === 'Movie');
            } else if (currentPage === 'tv-series') {
                filteredData = searchData.filter(
                    (item) => item.category === 'TV Series'
                );
            }

            if (currentPage === 'bookmarks') {
                filteredData = filteredData.filter((item) =>
                    bookmarks.some((bookmark) => bookmark.id === item.id),
                );
            }

            setFilteredData(filteredData);
        } catch (error) {
            console.log(error);
        }
    };

    let placeholderText = 'Search for movies or TV series';
    if (currentPage === 'movies') {
        placeholderText = 'Search for movies';
    } else if (currentPage === 'tv-series') {
        placeholderText = 'Search for TV series';
    } else if (currentPage === 'bookmarks') {
        placeholderText = 'Search for bookmarked shows';
    }

    return (
        <>
            <form
                className='sticky md:top-0 flex z-50 bg-dark-blue'
                onSubmit={handleSubmit}>
                <div className="flex items-center pt-8 max-lg:pt-36 max-sm:pt-24 group ">
                    <svg className="svg-clickable my-4 mr-4 max-md-my-2 max-md:mx-2 max-sm:my-1 max-sm:mx-1 duration-300 group-hover:scale-105 cursor-pointer fill-white group-hover:fill-red group-focus:fill-red" width="32" height="32" xmlns="http://www.w3.org/2000/svg"><path d="M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" /></svg>
                    <input
                        className={`w-full focus:outline-none outline-none duration-300 border-opacity-0 bg-transparent p-2 focus:border-opacity-100 focus:border-b border-b-greyish-blue caret-red `}
                        placeholder={placeholderText}
                        type='text'
                        value={query}
                        onChange={handleChange}
                        ref={searchInputRef}
                    />
                </div>
            </form>
        </>
    );
};