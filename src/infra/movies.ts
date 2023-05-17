export const movieNames = [
    '112', '1998', 'asia-in-24-days', 'autosport-the-series', 'below-echo', 'beyond-earth', 'bottom-gear', 'community-of-ours',
    'dark-side-of-the-moon', 'darker', 'dogs', 'during-the-hunt', 'earths-untouched', 'lone-heart', 'mission-saturn',
    'no-land-beyond', 'off-the-track', 'production-line', 'relentless', 'same-answer-2', 'the-diary', 'the-great-lands',
    'the-heiress', 'the-rockies', 'the-tasty-tour', 'undiscovered-cities', 'unresolved-cases', 'van-life', 'whispering-hill'
  ];

const movieTrending = ['1998', 'beyond-earth', 'bottom-gear', 'dark-side-of-the-moon', 'undiscovered-cities'];

const movieTrendingModified = movieTrending.map((movieTrendin) => {
    // Divide a string em palavras
    const words = movieTrendin.split('-');
    
    // Transforma as primeiras letras das palavras em maiúsculas e substitui "-" por espaço
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return capitalizedWords;
  });

  
  
  const movieNamesModified = movieNames.map((movieName) => {
    // Divide a string em palavras
    const words = movieName.split('-');
    
    // Transforma as primeiras letras das palavras em maiúsculas e substitui "-" por espaço
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    return capitalizedWords;
  });

console.log(movieNamesModified)

interface Movies {
    
  imageRegular: string[];
  imageMedium: string[];
  imageLarge: string[];
  imageTrending: string[];
  imageName: string[];
  title: string[];
  titleTrending: string[];
}

const movies: Movies = {
    imageRegular: [],
    imageMedium: [],
    imageLarge: [],
    imageTrending: [],
    imageName: [],
    title: [],
    titleTrending: [],

  };

for (const movieName of movieNames) {
    const movie = {
      imageRegular: `/images/${movieName}/regular/small.jpg`,
      imageMedium: `/images/${movieName}/regular/medium.jpg`,
      imageLarge: `/images/${movieName}/regular/large.jpg`,
      imageTrending: `/images/${movieName}/trending/large.jpg`,
      imageName: movieName, 
    };
    movies.imageRegular.push(movie.imageRegular);
    movies.imageMedium.push(movie.imageMedium);
    movies.imageLarge.push(movie.imageLarge);
    movies.imageName.push(movie.imageName);
  }

for (const movieNameModified of movieNamesModified) {
    const name = {
        title: movieNameModified,
    };
    movies.title.push(name.title);
}
for (const movieTrendin of movieTrending) {
    const trendin = {
    imageTrending: `/images/${movieTrendin}/trending/large.jpg`,
    
};
    movies.imageTrending.push(trendin.imageTrending);
    
    
}

for (const titleTrendin of movieTrendingModified) {
    const titletrend = {
    titleTrending: titleTrendin,
};

    movies.titleTrending.push(titletrend.titleTrending);
}
export default movies;
