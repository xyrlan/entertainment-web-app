const movieNames = [
    '112', '1998', 'asia-in-24-days', 'autosport-the-series', 'below-echo', 'beyond-earth', 'bottom-gear', 'community-of-ours',
    'dark-side-of-the-moon', 'darker', 'dogs', 'during-the-hunt', 'earths-untouched', 'lone-heart', 'mission-saturn',
    'no-land-beyond', 'off-the-track', 'production-line', 'relentless', 'same-answer-2', 'the-diary', 'the-great-lands',
    'the-heiress', 'the-rockies', 'the-tasty-tour', 'undiscovered-cities', 'unresolved-cases', 'van-life', 'whispering-hill'
  ];
  
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
  imageName: string[];
  title: string[];
}

const movies: Movies = {
    imageRegular: [],
    imageMedium: [],
    imageLarge: [],
    imageName: [],
    title: [],
  };

for (const movieName of movieNames) {
    const movie = {
      imageRegular: `/images/${movieName}/regular/small.jpg`,
      imageMedium: `/images/${movieName}/regular/medium.jpg`,
      imageLarge: `/images/${movieName}/regular/large.jpg`,
      imageName: movieName,
      title: movieNamesModified,
    };
    movies.imageRegular.push(movie.imageRegular);
    movies.imageMedium.push(movie.imageMedium);
    movies.imageLarge.push(movie.imageLarge);
    movies.imageName.push(movie.imageName);
    movies.title.push(movie.title);
  }

export default movies;