import {createContext, useState, useContext } from 'react';
import { movies as data } from '../data/data.js';

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const [preloader, setPreloader] = useState(false);
  const [movies, setMovies] = useState(data);
  const [savedMovies, setSavedMovies] = useState([]);

  return (
    <MovieContext.Provider value ={{movies,setMovies, savedMovies, setSavedMovies, preloader, setPreloader }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);