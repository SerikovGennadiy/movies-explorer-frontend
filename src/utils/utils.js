import { useEffect, useState } from "react";
import { VIEWPORT_WIDE, VIEWPORT_MIDDLE, VIEWPORT_THIN } from '../constants/constants';
import { SHORT_FILM_DURATION  } from "../constants/constants";

export const getViewportSizes = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height }
}

export const useViewportSizes = () => {
  const [dimensions, setDimensions] = useState(getViewportSizes());

  useEffect(() => {
    const resizeFunc = () => {
      setDimensions(getViewportSizes());
    }
    window.addEventListener('resize', resizeFunc);
    return () => {
      window.removeEventListener('resize', resizeFunc);
    }
  }, []);

  return dimensions; // { width, height, ..... }
}

export const useSkipTake = (arr) => {
   let partQuantity;
   let uploadQuantity;
   const { width } = useViewportSizes();

    const viewportWidth = width >= 1280 ? VIEWPORT_WIDE : width >= 768 ? VIEWPORT_MIDDLE : VIEWPORT_THIN;
    switch(viewportWidth) {
      case VIEWPORT_WIDE:
        partQuantity = 12;
        uploadQuantity = 3;
        break;
      case VIEWPORT_MIDDLE:
        partQuantity = 8;
        uploadQuantity = 2;
        break;
      case VIEWPORT_THIN:
        partQuantity = 5;
        uploadQuantity = 2;
        break;
      default:
    }

    return { partQuantity, uploadQuantity };
}

export const formatTime = (_minutes) => {
  const hours = parseInt(_minutes / 60, 10) || 0;
  const minutes = parseInt(_minutes % 60, 10) || 0;
  return `${hours > 0 ? hours+'ч':''} ${minutes}м`;
}

export const formatTimeMilli = (_milliseconds) => {
  const minutes = _milliseconds / 1000 / 60;
  return formatTime(minutes);
}

export const filterMovies = (movies, title) => {
  console.log(title);
  if(title === '') {
    return movies;
  }
  return movies.filter(movie => {
    const _title = title.toLowerCase();
    const nameEn = movie["nameEN"] !== null ? movie["nameEN"].toLowerCase().includes(_title) : false;
    const nameRu = movie["nameRU"] !== null ? movie["nameRU"].toLowerCase().includes(_title) : false;
    return nameEn || nameRu;
  });
}

export const filterShortMovies = (movies) => {
  console.log(movies, movies.filter(movie => movie.duration < SHORT_FILM_DURATION), SHORT_FILM_DURATION)
  return movies.filter(movie => movie.duration < SHORT_FILM_DURATION);
}

export const getServerMovies = () => {
  let _movies = [];
  if(localStorage.getItem('serverMovies')) {
    const { movies } = JSON.parse(localStorage.getItem('serverMovies'));
    if(movies.__proto__ === Array.prototype) {
      _movies = movies;
    }
  }
  return _movies;
}

export const getLastMovies = () => {
  let _movies = [];
  if(localStorage.getItem('lastQueryMovies')) {
    const { movies } = JSON.parse(localStorage.getItem('lastQueryMovies'));
    if(movies.__proto__ === Array.prototype) {
      _movies = movies;
    }
  }
  return _movies;
}

export const getSavedMovies = () => {
  let _movies = [];
  if(localStorage.getItem('lastQuerySavedMovies')) {
    const { movies } = JSON.parse(localStorage.getItem('lastQuerySavedMovies'));
    if(movies.__proto__ === Array.prototype) {
      _movies = movies;
    }
  }
  return _movies;
}

export const saveLastMovies = (movies) => {
  if(movies.__proto__ === Array.prototype) {
    localStorage.setItem('lastQueryMovies', JSON.stringify({ movies }))
  }
}; // lastQuerySavedMovies

export const saveSavedMovies = (movies) => {
  if(movies.__proto__ === Array.prototype) {
    localStorage.setItem('lastQuerySavedMovies', JSON.stringify({ movies }))
  }
} // lastQuerySavedMovies

export const saveServerMovies = (movies) => {
  if(movies.__proto__ === Array.prototype) {
    localStorage.setItem('serverMovies', JSON.stringify({ movies }))
  }
} // serverMovies