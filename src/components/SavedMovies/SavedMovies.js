import './SavedMovies.css';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';

const SavedMovies = () => {
  return (
     <>
      <Header/>
      <SearchForm isSavedList={true}/>
      <MoviesCardList isSavedList={true}/>
      <Footer />
     </>
  )
}

export default SavedMovies;
