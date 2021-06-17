import {createContext, useState, useContext, useEffect } from 'react';
//import { movies as data } from '../data/data.js';
import mainApi from '../utils/MainApi';
import { useAccount } from './AccountContext';

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const { account } = useAccount();

  useEffect(() => {
    mainApi.getSavedMovies()
      .then(({ data: movies }) => {
        if(account && movies.length > 0) {
          const _savedMovies = movies.filter(movie => movie.owner === account._id);
          setSavedMovies(_savedMovies);
        }
      })
      .catch(err => console.error);
  }, [account])

  return (
    <MovieContext.Provider value ={{movies,setMovies, savedMovies, setSavedMovies, preloader, setPreloader }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);