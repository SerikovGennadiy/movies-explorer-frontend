import { apiConfig } from '../constants/constants.js';

class MovieApi {
  constructor({ movieUrl, headers }) {
    this._movieUrl = movieUrl;
    this._headers = headers;
  }

  getMovies() {
      return fetch(`${this._movieUrl}`)
             .then(movies => movies.json())

  }
}

const movieApi = new MovieApi(apiConfig);

export default movieApi;