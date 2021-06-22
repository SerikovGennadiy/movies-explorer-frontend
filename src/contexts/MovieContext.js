import mainApi from '../utils/MainApi';
import movieApi from '../utils/MoviesApi';

import { createContext, useState, useContext, useEffect } from 'react';
import { useAccount } from './AccountContext';
import { getLastMovies, getSavedMovies, getServerMovies, saveSavedMovies, saveServerMovies } from '../utils/utils';

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const { account } = useAccount();

  const [ preloader, setPreloader ] = useState(false);
  const [ serverMovies, setServerMovies ]  = useState([]);
  const [ movies, setMovies ]  = useState([]);
  const [ savedMovies, setSavedMovies ] = useState([]);

  useEffect(() => {
      // saved-movies
      if(account) {
        const movies = getSavedMovies();
        if(movies.length > 0) {
          setSavedMovies(movies);
        }
        else {
           mainApi.getSavedMovies()
            .then(({ data: movies }) => {
              if(movies.length > 0) {
                saveSavedMovies(movies);
                setSavedMovies(movies);
              }
            })
            .catch(err => console.error);
        }

        const serverMovies = getServerMovies();
        if(serverMovies.length > 0) {
          setServerMovies(serverMovies);
        }
        else {
          movieApi.getMovies()
            .then(movies => {
              if(movies.length > 0) {
                saveServerMovies(movies);
                setServerMovies(movies);
              }
            })
            .catch(err => console.error);
        }

        const lastQueryMovies = getLastMovies();
        setMovies(lastQueryMovies);
      }
    }, [account]);

  return (
    <MovieContext.Provider value ={{ movies, setMovies, savedMovies, setSavedMovies, preloader, setPreloader, serverMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
