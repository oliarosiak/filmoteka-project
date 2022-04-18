import axios from 'axios';
import { filmName } from './searchMovie';
import { alertMessage } from './searchAlert';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

export async function getMovies(page) {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&language=en-US&page=${page}`,
  );
  try {
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function fetchSearchMovie(page) {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&query=${filmName}&page=${page}`,
  );
  try {
    const data = response.data;
    alertMessage(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmById(filmId) {
  try {
    const axiosFilmId = await axios.get(`${BASE_URL}movie/${filmId}?api_key=${KEY}`);
    return axiosFilmId.data;
  } catch (error) {
    console.log(error);
  }
}



// витянує трейлери для фільма по id

export async function onfetchTrailers(filmId) {
    try {
    //const url = `${BASE_URL}${filmId}/videos?api_key=${KEY}&language=en-US`;
    //const response = await fetch(url);
    const url = await axios.get(`${BASE_URL}movie/${filmId}/videos?api_key=${KEY}&language=en-US`);
    //const data = response.data;
    //return data;
      return url.data;
    } catch (error) {
      console.log(error);
    }
}


//onfetchTrailers(45274);
// getMovies();
// getFilmById();

