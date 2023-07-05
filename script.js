
const API_KEY = '6c915d8cb8598277067b0da21d0c7cd4' ;
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_URL = BASE_URL + 'search/movie?api_key=79d14bb7030b5ec040a81e1134337d67&language=en-US&page=1&query=Star%20Wars';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const main = document.getElementById('content');


GetMovies(API_URL);

function GetMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results);
        ShowMovies(data.results);
    })
}

function ShowMovies(data){
    main.innerHTML = ``;
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview, genre_ids, release_date}= movie;
        const movieElement = document.createElement('div');
        movieElement.classList.add('cards');
        movieElement.innerHTML = `
        <div class="imgdiv">
        <img src="${IMG_URL+poster_path}" alt="${title}"></div>
            <div class="movieinfo">
                <h3>${title}</h3>
                <span class="rating">Rating:  ${vote_average}<br></span>
                <span>Release date: ${release_date}</span>
            </div>
            <div class="description">
                ${overview}
            </div>
        `
        main.appendChild(movieElement);
    });
}




