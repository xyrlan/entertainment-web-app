// import { useState, useEffect } from 'react';
// import { fetchGenreMovies } from '@/infra/tmdb';



// const useFetchGenreMovies = (genreId) => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const genreMovies = await fetchGenreMovies(genreId);
//         setMovies(genreMovies.slice(0, 20));
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, [genreId]);

//   return movies;
// };

// export default useFetchGenreMovies;