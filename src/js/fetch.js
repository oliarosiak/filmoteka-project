import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

export async function getMovies() {
  const response = await axios.get(`${BASE_URL}popular?api_key=${KEY}&language=en-US&page=1`);
  try {
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFilmById(filmId) {
  try {
    const axiosFilmId = await axios.get(`${BASE_URL}${filmId}?api_key=${KEY}`);
    return axiosFilmId.data;
  } catch (error) {
    console.log(error);
  }
}
