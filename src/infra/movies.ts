 const msNames = [
    '112', '1998', 'asia-in-24-days', 'autosport-the-series', 'below-echo', 'beyond-earth', 'bottom-gear', 'community-of-ours',
    'dark-side-of-the-moon', 'darker', 'dogs', 'during-the-hunt', 'earths-untouched', 'lone-heart', 'mission-saturn',
    'no-land-beyond', 'off-the-track', 'production-line', 'relentless', 'same-answer-2', 'the-diary', 'the-great-lands',
    'the-heiress', 'the-rockies', 'the-tasty-tour', 'undiscovered-cities', 'unresolved-cases', 'van-life', 'whispering-hill'
];

const msArrays = [
    { name: '112', type: 'Movie', indication: 'PG', date: '2019', category: '', title: '', },
    { name: '1998', type: 'TV Series', indication: '18+', date: '2016', category: '', title: '', trend: ''},
    { name: 'asia-in-24-days', type: 'TV Series', indication: 'E', date: '2022', category: '', title: '', },
    { name: 'autosport-the-series', type: 'Movie', indication: 'PG', date: '2021', category: '', title: '', },
    { name: 'below-echo', type: 'TV Series', indication: 'E', date: '2019', category: '', title: '', },
    { name: 'beyond-earth', type: 'TV Series', indication: 'E', date: '2016', category: '', title: '', trend: '' },
    { name: 'bottom-gear', type: 'Movie', indication: 'PG', date: '2022', category: '', title: '', trend: '' },
    { name: 'community-of-ours', type: 'TV Series', indication: '18+', date: '2021', category: '', title: '', },
    { name: 'dark-side-of-the-moon', type: 'TV Series', indication: 'PG', date: '2023', category: '', title: '', trend: '' },
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
    { name: 'undiscovered-cities', type: 'TV Series', indication: '18+', date: '2022', category: '', title: '', trend: '' },
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


export const movies = msArraysModified.filter(item => item.type === 'Movie');

export const series = msArraysModified.filter(item => item.type === 'TV Series');

export const msArrayOutTrend = msArraysModified.filter(item => !item.hasOwnProperty('trend'));

const msArrayTrend = msArrays.filter(item => item.trend === '');
export const msArrayTrendModified = msArrayTrend.map(item => {
    return {
        ...item,
        trendLargeImage: `/images/${item.name}/trending/large.jpg`,
        trendSmallImage: `/images/${item.name}/trending/small.jpg`,
    };
});

