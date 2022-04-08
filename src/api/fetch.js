import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular';
const KEY = '084ca305e7a4e4bb3dbbc7b67e975385';

getMovies()

async function getMovies() {
    const response = await axios.get(`${BASE_URL}?api_key=${KEY}&language=en-US&page=1`);
    try {
        const data = response.data;
        console.log(data);
        return data;        
    }
    catch (error) {
    }        
}