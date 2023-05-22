// "use client"
// import { useEffect, useState } from "react";
// import useFetchData from "@/hook/useFetchData";
// import { fetchPopularMovies } from "@/infra/tmdb";


// export default function Teste() {

//     // const TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original/';
//     // const BASE_URL = 'https://api.themoviedb.org/3/';
//     // const TMDB_API_KEY = 'api_key=94336ccdc9e2add3bab1e3dc33dc881a'

//     // const [topMovies, setTopMovies] = useState<any[]>([]);

//     // const getTopRatedMovies = async (url: any) => {
//     //     const res = await fetch(url);
//     //     const data = await res.json();


//     //     console.log(data.results);
//     //     setTopMovies(data.results);
//     // }

//     // useEffect(() => {
//     //     const topRatedUrl = `${BASE_URL}movie/top_rated?${TMDB_API_KEY}`

//     //     const images = `${TMDB_IMAGE_ENDPOINT}`

//     //     console.log(topRatedUrl);

//     //     getTopRatedMovies(topRatedUrl);

//     // }, []);
//     const { data: movies } =
//     useFetchData(fetchPopularMovies);

// console.log(movies)
//     return (

//         <div>
            
//                 {movies.map((movie) => (
//                     <div>
//                         <p className="text-white">{movie.title}</p>

//                         <img src={TMDB_IMAGE_ENDPOINT + movie.poster_path} />
//                     </div>

//                 ))}
//         </div>
//     )

// }
