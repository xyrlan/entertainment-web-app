export const msNames = [
    '112', '1998', 'asia-in-24-days', 'autosport-the-series', 'below-echo', 'beyond-earth', 'bottom-gear', 'community-of-ours',
    'dark-side-of-the-moon', 'darker', 'dogs', 'during-the-hunt', 'earths-untouched', 'lone-heart', 'mission-saturn',
    'no-land-beyond', 'off-the-track', 'production-line', 'relentless', 'same-answer-2', 'the-diary', 'the-great-lands',
    'the-heiress', 'the-rockies', 'the-tasty-tour', 'undiscovered-cities', 'unresolved-cases', 'van-life', 'whispering-hill'
  ];

  const msArrays =  [
    { name: '112', type: 'Movie', indication: 'PG', date: '2019', category: '', title: '', },
    { name: '1998', type: 'TV Series', indication: '18+', date: '2016', category: '', title: '', },
    { name: 'asia-in-24-days', type: 'TV Series', indication: 'E', date: '2022', category: '', title: '', },
    { name: 'autosport-the-series', type: 'Movie', indication: 'PG', date: '2021', category: '', title: '', },
    { name: 'below-echo', type: 'TV Series', indication: 'E', date: '2019', category: '', title: '', },
    { name: 'beyond-earth', type: 'TV Series', indication: 'E', date: '2016', category: '', title: '', },
    { name: 'bottom-gear', type: 'Movie', indication: 'PG', date: '2022', category: '', title: '', },
    { name: 'community-of-ours', type: 'TV Series', indication: '18+', date: '2021', category: '', title: '', },
    { name: 'dark-side-of-the-moon', type: 'TV Series', indication: 'PG', date: '2023', category: '', title: '', },
    { name: 'darker', type: 'Movie', indication: 'E', date: '2017', category: '', title: '', },
    { name: 'dogs', type: 'TV Series', indication: '18+', date: '2021', category: '', title: '', },
    { name: 'during-the-hunt', type: 'TV Series', indication: 'PG', date: '2020', category: '', title: '', },
    { name: 'earths-untouched', type: 'Movie', indication: '18+', date: '2016', category: '', title: '', },
    { name: 'lone-heart', type: 'TV Series', indication: 'PG', date: '2020', category: '', title: '', },
    { name: 'mission-saturn', type: 'TV Series', indication: 'E', date: '2019', category: '', title: '', },
    { name: 'no-land-beyond', type: 'Movie', indication: 'PG', date: '2022', category: '', title: '', },
    { name: 'off-the-track', type: 'TV Series', indication: '18+', date: '2023', category: '', title: '', },
    { name: 'production-line', type: 'TV Series', indication: 'E', date: '2016', category: '', title: '', },
    { name: 'relentless', type: 'Movie', indication: 'PG', date: '2019', category: '', title: '', },
    { name: 'same-answer-2', type: 'TV Series', indication: 'PG', date: '2023', category: '', title: '', },
    { name: 'the-diary', type: 'Movie', indication: 'E', date: '2017', category: '', title: '', },
    { name: 'the-great-lands', type: 'TV Series', indication: 'E', date: '2020', category: '', title: '', },
    { name: 'the-heiress', type: 'TV Series', indication: 'PG', date: '2019', category: '', title: '', },
    { name: 'the-rockies', type: 'Movie', indication: '18+', date: '2022', category: '', title: '', },
    { name: 'the-tasty-tour', type: 'TV Series', indication: 'PG', date: '2017', category: '', title: '', },
    { name: 'undiscovered-cities', type: 'TV Series', indication: '18+', date: '2022', category: '', title: '', },
    { name: 'unresolved-cases', type: 'Movie', indication: 'PG', date: '2017', category: '', title: '', },
    { name: 'van-life', type: 'TV Series', indication: 'PG', date: '2021', category: '', title: '', },
    { name: 'whispering-hill', type: 'Movie', indication: 'E', date: '2020', category: '', title: '', },
  ]

  msArrays.forEach(item => {
    if (item.type === 'TV Series') {
      item.category = '/images/icon-category-tv.svg';
    } else if (item.type === 'Movie') {
      item.category = '/images/icon-category-movie.svg';
    }
    item.title = item.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());


  });

  export const msArraysModified = msArrays.map(item => {
    return {
      ...item,
      imageLarge: `/images/${item.name}/regular/large.jpg`,
      imageMedium: `/images/${item.name}/regular/medium.jpg`,
      imageSmall: `/images/${item.name}/regular/small.jpg`,
    };
  });



  console.log(msArraysModified);

const msTrending = [
    { type: 'Movie', indication: 'E' , category: '', title: '', date:'2016', name: '1998'},
    { type: 'TV Series', indication: 'PG' , category: '', title: '', date:'2016', name: 'beyond-earth'}, 
    { type: 'Movie', indication: 'PG' , category: '', title: '', date:'2022', name: 'bottom-gear'}, 
    { type: 'TV Series', indication: 'PG' , category: '', title: '', date:'2023', name: 'dark-side-of-the-moon'}, 
    { type: 'TV Series', indication: 'E' , category: '', title: '', date:'2022', name: 'undiscovered-cities'}
];

msTrending.forEach(item => {

    if (item.type === 'TV Series') {
        item.category = '/images/icon-category-tv.svg';
      } else if (item.type === 'Movie') {
        item.category = '/images/icon-category-movie.svg';
      }

    item.title = item.name.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
})

 export const msTrendingModified = msTrending.map(item => {
    return {
        ...item,
        imageLarge: `/images/${item.name}/trending/large.jpg`,
        imageSmall: `/images/${item.name}/trending/small.jpg`,
        
    }

  })

console.log(msTrendingModified)
// interface Movies {
    
//   imageRegular: string[];
//   imageMedium: string[];
//   imageLarge: string[];
//   imageTrending: string[];
//   imageName: string[];
//   title: string[];
//   titleTrending: string[];
// }

// const movies: Movies = {
//     imageRegular: [],
//     imageMedium: [],
//     imageLarge: [],
//     imageTrending: [],
//     imageName: [],
//     title: [],
//     titleTrending: [],

//   };

// for (const msName of msNames) {
//     const movie = {
//       imageRegular: `/images/${msName}/regular/small.jpg`,
//       imageMedium: `/images/${msName}/regular/medium.jpg`,
//       imageLarge: `/images/${msName}/regular/large.jpg`,
//       imageTrending: `/images/${msName}/trending/large.jpg`,
//       imageName: msName, 
//     };
//     movies.imageRegular.push(movie.imageRegular);
//     movies.imageMedium.push(movie.imageMedium);
//     movies.imageLarge.push(movie.imageLarge);
//     movies.imageName.push(movie.imageName);
//   }

// for (const msNameModified of msNamesModified) {
//     const name = {
//         title: msNameModified,
//     };
//     movies.title.push(name.title);
// }
// for (const movieTrendin of movieTrending) {
//     const trendin = {
//     imageTrending: `/images/${movieTrendin}/trending/large.jpg`,
    
// };
//     movies.imageTrending.push(trendin.imageTrending);
    
    
// }

// for (const titleTrendin of movieTrendingModified) {
//     const titletrend = {
//     titleTrending: titleTrendin,
// };

//     movies.titleTrending.push(titletrend.titleTrending);
// }


// export default movies;
