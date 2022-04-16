import axios from 'axios';
import { search } from './searchMovie';
import { query } from './searchMovie';
import { filmName } from './searchMovie';

const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

export async function getMovies(page) {
  const response = await axios.get(
    `${BASE_URL}${search}?api_key=${KEY}&language=en-US${query}${filmName}&page=${page}`,
  );
  try {
    const data = response.data;
    // console.log(data);
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
