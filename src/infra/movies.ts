const movieNames = [
    '112', '1998', 'asia-in-24-days', 'autosport-the-series', 'below-echo', 'beyond-earth', 'bottom-gear', 'community-of-ours',
    'dark-side-of-the-moon', 'darker', 'dogs', 'during-the-hunt', 'earths-untouched', 'lone-heart', 'mission-saturn',
    'no-land-beyond', 'off-the-track', 'production-line', 'relentless', 'same-answer-2', 'the-diary', 'the-great-lands',
    'the-heiress', 'the-rockies', 'the-tasty-tour', 'undiscovered-cities', 'unresolved-cases', 'van-life', 'whispering-hill'
  ];
  
interface Movies {
    
  imageRegular: string[];
  imageMedium: string[];
  imageLarge: string[];
  imageName: string[];
}

const movies: Movies = {
    imageRegular: [],
    imageMedium: [],
    imageLarge: [],
    imageName: []
  };

  const sizes = ["small", "medium", "large"];

for (const movieName of movieNames) {
    const movie = {
      imageRegular: `/images/${movieName}/regular/small.jpg`,
      imageMedium: `/images/${movieName}/regular/medium.jpg`,
      imageLarge: `/images/${movieName}/regular/large.jpg`,
      imageName: movieName
    };
    movies.imageRegular.push(movie.imageRegular);
    movies.imageMedium.push(movie.imageMedium);
    movies.imageLarge.push(movie.imageLarge);
    movies.imageName.push(movie.imageName);
  }


// const movies = {

//     small: [

//         {
//             imgSrc: '/images/112/regular/small.jpg', name: '112'
//       },
//         {
//             imgSrc: '/images/1998/regular/small.jpg', name: '1998'
//       },
//         {
//             imgSrc: '/images/asia-in-24-days/regular/small.jpg', name: 'asia-in-24-days'
//       },
//         {
//             imgSrc: '/images/autosport-the-series/regular/small.jpg', name: 'autosport-the-series'
//       },
//         {
//             imgSrc: '/images/below-echo/regular/small.jpg', name: 'below-echo'
//       },
//         {
//             imgSrc: '/images/beyond-earth/regular/small.jpg', name: 'beyond-earth'
//       },
//         {
//             imgSrc: '/images/bottom-gear/regular/small.jpg', name: 'bottom-gear'
//       },
//         {
//             imgSrc: '/images/community-of-ours/regular/small.jpg', name: 'community-of-ours'
//       },
//         {
//             imgSrc: '/images/dark-side-of-the-moon/regular/small.jpg', name: 'dark-side-of-the-moon'
//       },
//         {
//             imgSrc: '/images/darker/regular/small.jpg', name: 'darker'
//       },
//         {
//             imgSrc: '/images/dogs/regular/small.jpg', name: 'dogs'
//       },
//         {
//             imgSrc: '/images/during-the-hunt/regular/small.jpg', name: 'during-the-hunt'
//       },
//         {
//             imgSrc: '/images/earths-untouched/regular/small.jpg', name: 'earths-untouched'
//       },
//         {
//             imgSrc: '/images/lone-heart/regular/small.jpg', name: 'lone-heart'
//       },
//         {
//             imgSrc: '/images/mission-saturn/regular/small.jpg', name: 'mission-saturn'
//       },
//         {
//             imgSrc: '/images/no-land-beyond/regular/small.jpg', name: 'no-land-beyond'
//       },
//         {
//             imgSrc: '/images/off-the-track/regular/small.jpg', name: 'off-the-track'
//       },
//         {
//             imgSrc: '/images/production-line/regular/small.jpg', name: 'production-line'
//       },
//         {
//             imgSrc: '/images/relentless/regular/small.jpg', name: 'relentless'
//       },
//         {
//             imgSrc: '/images/same-answer-2/regular/small.jpg', name: 'same-answer-2'
//       },
//         {
//             imgSrc: '/images/the-diary/regular/small.jpg', name: 'the-diary'
//       },
//         {
//             imgSrc: '/images/the-great-lands/regular/small.jpg', name: 'the-great-lands'
//       },
//         {
//             imgSrc: '/images/the-heiress/regular/small.jpg', name: 'the-heiress'
//       },
//         {
//             imgSrc: '/images/the-rockies/regular/small.jpg', name: 'the-rockies'
//       },
//         {
//             imgSrc: '/images/the-tasty-tour/regular/small.jpg', name: 'the-tasty-tour'
//       },
//         {
//             imgSrc: '/images/undiscovered-cities/regular/small.jpg', name: 'undiscovered-cities'
//       },
//         {
//             imgSrc: '/images/unresolved-cases/regular/small.jpg', name: 'unresolved-cases'
//       },
//         {
//             imgSrc: '/images/van-life/regular/small.jpg', name: 'van-life'
//       },
//         {
//             imgSrc: '/images/whispering-hill/regular/small.jpg', name: 'whispering-hill'
//       },
//     ],
// medium: [
//     {
//         imgSrc: '/images/112/regular/medium.jpg', name: '112'
//     },
//     {
//         imgSrc: '/images/1998/regular/medium.jpg', name: '1998'
//     },
//     {
//         imgSrc: '/images/asia-in-24-days/regular/medium.jpg', name: 'asia-in-24-days'
//     },
//     {
//         imgSrc: '/images/autosport-the-series/regular/medium.jpg', name: 'autosport-the-series'
//     },
//     {
//         imgSrc: '/images/below-echo/regular/medium.jpg', name: 'below-echo'
//     },
//     {
//         imgSrc: '/images/beyond-earth/regular/medium.jpg', name: 'beyond-earth'
//     },
//     {
//         imgSrc: '/images/bottom-gear/regular/medium.jpg', name: 'bottom-gear'
//     },
//     {
//         imgSrc: '/images/community-of-ours/regular/medium.jpg', name: 'community-of-ours'
//     },
//     {
//         imgSrc: '/images/dark-side-of-the-moon/regular/medium.jpg', name: 'dark-side-of-the-moon'
//     },
//     {
//         imgSrc: '/images/darker/regular/medium.jpg', name: 'darker'
//     },
//     {
//         imgSrc: '/images/dogs/regular/medium.jpg', name: 'dogs'
//     },
//     {
//         imgSrc: '/images/during-the-hunt/regular/medium.jpg', name: 'during-the-hunt'
//     },
//     {
//         imgSrc: '/images/earths-untouched/regular/medium.jpg', name: 'earths-untouched'
//     },
//     {
//         imgSrc: '/images/lone-heart/regular/medium.jpg', name: 'lone-heart'
//     },
//     {
//         imgSrc: '/images/mission-saturn/regular/medium.jpg', name: 'mission-saturn'
//     },
//     {
//         imgSrc: '/images/no-land-beyond/regular/medium.jpg', name: 'no-land-beyond'
//     },
//     {
//         imgSrc: '/images/off-the-track/regular/medium.jpg', name: 'off-the-track'
//     },
//     {
//         imgSrc: '/images/production-line/regular/medium.jpg', name: 'production-line'
//     },
//     {
//         imgSrc: '/images/relentless/regular/medium.jpg', name: 'relentless'
//     },
//     {
//         imgSrc: '/images/same-answer-2/regular/medium.jpg', name: 'same-answer-2'
//     },
//     {
//         imgSrc: '/images/the-diary/regular/medium.jpg', name: 'the-diary'
//     },
//     {
//         imgSrc: '/images/the-great-lands/regular/medium.jpg', name: 'the-great-lands'
//     },
//     {
//         imgSrc: '/images/the-heiress/regular/medium.jpg', name: 'the-heiress'
//     },
//     {
//         imgSrc: '/images/the-rockies/regular/medium.jpg', name: 'the-rockies'
//     },
//     {
//         imgSrc: '/images/the-tasty-tour/regular/medium.jpg', name: 'the-tasty-tour'
//     },
//     {
//         imgSrc: '/images/undiscovered-cities/regular/medium.jpg', name: 'undiscovered-cities'
//     },
//     {
//         imgSrc: '/images/unresolved-cases/regular/medium.jpg', name: 'unresolved-cases'
//     },
//     {
//         imgSrc: '/images/van-life/regular/medium.jpg', name: 'van-life'
//     },
//     {
//         imgSrc: '/images/whispering-hill/regular/medium.jpg', name: 'whispering-hill'
//     }
// ],

// large: [ 
//     {
//         imgSrc: '/images/112/regular/large.jpg', name: '112'
//       },
//       {
//         imgSrc: '/images/1998/regular/large.jpg', name: '1998'
//       },
//       {
//         imgSrc: '/images/asia-in-24-days/regular/large.jpg', name: 'asia-in-24-days'
//       },
//       {
//         imgSrc: '/images/autosport-the-series/regular/large.jpg', name: 'autosport-the-series'
//       },
//       {
//         imgSrc: '/images/below-echo/regular/large.jpg', name: 'below-echo'
//       },
//       {
//         imgSrc: '/images/beyond-earth/regular/large.jpg', name: 'beyond-earth'
//       },
//       {
//         imgSrc: '/images/bottom-gear/regular/large.jpg', name: 'bottom-gear'
//       },
//       {
//         imgSrc: '/images/community-of-ours/regular/large.jpg', name: 'community-of-ours'
//       },
//       {
//         imgSrc: '/images/dark-side-of-the-moon/regular/large.jpg', name: 'dark-side-of-the-moon'
//       },
//       {
//         imgSrc: '/images/darker/regular/large.jpg', name: 'darker'
//       },
//       {
//         imgSrc: '/images/dogs/regular/large.jpg', name: 'dogs'
//       },
//       {
//         imgSrc: '/images/during-the-hunt/regular/large.jpg', name: 'during-the-hunt'
//       },
//       {
//         imgSrc: '/images/earths-untouched/regular/large.jpg', name: 'earths-untouched'
//       },
//       {
//         imgSrc: '/images/lone-heart/regular/large.jpg', name: 'lone-heart'
//       },
//       {
//         imgSrc: '/images/mission-saturn/regular/large.jpg', name: 'mission-saturn'
//       },
//       {
//         imgSrc: '/images/no-land-beyond/regular/large.jpg', name: 'no-land-beyond'
//       },
//       {
//         imgSrc: '/images/off-the-track/regular/large.jpg', name: 'off-the-track'
//       },
//       {
//         imgSrc: '/images/production-line/regular/large.jpg', name: 'production-line'
//       },
//       {
//         imgSrc: '/images/relentless/regular/large.jpg', name: 'relentless'
//       },
//       {
//         imgSrc: '/images/same-answer-2/regular/large.jpg', name: 'same-answer-2'
//       },
//       {
//         imgSrc: '/images/the-diary/regular/large.jpg', name: 'the-diary'
//       },
//       {
//         imgSrc: '/images/the-great-lands/regular/large.jpg', name: 'the-great-lands'
//       },
//       {
//         imgSrc: '/images/the-heiress/regular/large.jpg', name: 'the-heiress'
//       },
//       {
//         imgSrc: '/images/the-rockies/regular/large.jpg', name: 'the-rockies'
//       },
//       {
//         imgSrc: '/images/the-tasty-tour/regular/large.jpg', name: 'the-tasty-tour'
//       },
//       {
//         imgSrc: '/images/undiscovered-cities/regular/large.jpg', name: 'undiscovered-cities'
//       },
//       {
//         imgSrc: '/images/unresolved-cases/regular/large.jpg', name: 'unresolved-cases'
//       },
//       {
//         imgSrc: '/images/van-life/regular/large.jpg', name: 'van-life'
//       },
//       {
//         imgSrc: '/images/whispering-hill/regular/large.jpg', name: 'whispering-hill'
//       }
// ]}
export default movies;