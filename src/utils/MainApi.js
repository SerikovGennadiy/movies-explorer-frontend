import { apiConfig } from '../constants/constants.js';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getSavedMovies = () => {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: 'include'
    })
    .then(this._checkReponse);
  }

  saveMovie = ( country,
                director,
                duration,
                year,
                description,
                image,
                trailer,
                nameRU,
                nameEN,
                thumbnail,
                movieId ) => {
    return fetch(`${this._baseUrl}/movies`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({country,
                              director,
                              duration,
                              year,
                              description,
                              image,
                              trailer,
                              nameRU,
                              nameEN,
                              thumbnail,
                              movieId}),
        credentials: 'include'
    })
    .then(this._checkReponse);
  }

  deleteMovie = (movieId) => {
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(this._checkReponse);
  }

  signup (email, password, name) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password, name}),
      credentials: 'include'
    })
    .then(this._checkReponse);
  };

  signin  (email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
      credentials: 'include'
    })
    .then(this._checkReponse);
  };

  signout () {
    return fetch(`${this._baseUrl}/signout`, { credentials: 'include' })
    .then(this._checkReponse);
  }

  updateProfile (name, email) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email}),
      credentials: 'include'
    })
    .then(this._checkReponse);
  }

  checkToken () {
    return fetch(`${this._baseUrl}/users/me`, {  credentials: 'include' })
    .then(this._checkReponse);
  }

  _checkReponse(result) {
     return result.json();
  }
}

const mainApi = new MainApi(apiConfig);

export default mainApi;