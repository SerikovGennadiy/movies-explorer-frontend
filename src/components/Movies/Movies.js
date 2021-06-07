import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import { useMovies } from '../../contexts/MovieContext';

const Movies = () => {
    const { movies } = useMovies();
    return (
       <>
        <Header/>
        <SearchForm/>
        <MoviesCardList movies={movies}/>
        <Footer />
       </>
    )
}

export default Movies;
