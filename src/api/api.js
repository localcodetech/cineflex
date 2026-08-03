const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

const TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const fetchOptions = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
    accept: "application/json",
  },
};

const getData = async (url) => {
  const response = await fetch(url, fetchOptions);

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  return await response.json();
};














export const getTrending = async ( page= 1)=>{
    const url = `${BASE_URL}/trending/movie/week?page=${page}`
    return getData(url);
}





export const getPopular = async (page = 1) => {
  const url = `${BASE_URL}/movie/popular?page=${page}`;
  return getData(url);
};





export const getNowPlaying = async (page = 1) => {
  const url = `${BASE_URL}/movie/now_playing?page=${page}`;
  return getData(url);
};





export const getTopRated = async (page = 1) => {
  const url = `${BASE_URL}/movie/top_rated?page=${page}`;
  return getData(url);
};





export const searchMovies = async (query, page = 1) => {
  const safeQuery = encodeURIComponent(query);
  const url = `${BASE_URL}/search/movie?query=${safeQuery}&page=${page}`;
  return getData(url);
};





export const getMovie = async (id) => {
  const url = `${BASE_URL}/movie/${id}?append_to_response=credits,videos`;
  return getData(url);
};





export const getGenres = async () => {
  const url = `${BASE_URL}/genre/movie/list`;
  return getData(url);
};



// start filter function 

export const discoverMovies = async (page = 1, filters = {}) => {
  const { genre, year, sortBy } = filters;

  let url = `${BASE_URL}/discover/movie?page=${page}`;

  if (sortBy) {
    url += `&sort_by=${sortBy}`;
  } else {
    url += "&sort_by=popularity.desc";
  }

  if (genre) {
    url += `&with_genres=${genre}`;
  }

  if (year) {
    url += `&primary_release_year=${year}`;
  }

  if (sortBy === "vote_average.desc") {
    url += "&vote_count.gte=200";
  }

  return getData(url);
};

// end






// now i will get the images  => TODO //





export const getPosterUrl = (path) => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/w342${path}`;
};

export const getBackdropUrl = (path) => {
  if (!path) return null;
  return `${IMAGE_BASE_URL}/w1280${path}`;
};
