import mainApi from '../utils/MainApi';
import { createContext, useState, useContext, useEffect } from 'react';
import { useAccount } from './AccountContext';
import { getLastMovies, getLastSavedMovies } from '../utils/utils';

const MovieContext = createContext();

export const MovieProvider = ({children}) => {
  const { account } = useAccount();

  const [ preloader, setPreloader ] = useState(false);
  const [ movies, setMovies ]  = useState([]);
  const [ savedMovies, setSavedMovies ] = useState([]);

  useEffect(() => {
      // saved-movies
      if(account) {
        const movies = getLastSavedMovies();
        if(movies.length > 0) {
          setSavedMovies(movies);
        }
        else {
          return mainApi.getSavedMovies()
            .then(({ data: movies }) => {
              localStorage.setItem('lastQuerySavedMovies', JSON.stringify({ movies }));
              setSavedMovies(movies);
            })
            .catch(err => console.error);
        }
      }

      // movies
      const movies = getLastMovies();
      setMovies(movies);
    }, [account]);

  return (
    <MovieContext.Provider value ={{ movies, setMovies, savedMovies, setSavedMovies, preloader, setPreloader }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovies = () => useContext(MovieContext);
