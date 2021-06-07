import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useMovies } from '../../contexts/MovieContext';

const SavedMovies = () => {
  const { savedMovies } = useMovies();
  return (
     <>
      <Header/>
      <SearchForm/>
      <MoviesCardList movies={savedMovies} isSaved={true}/>
      <Footer />
     </>
  )
}

export default SavedMovies;
