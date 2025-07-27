import { useGetMoviesQuery } from '../../services/TMDB';

const Movies = () => {
    const { data, isLoading, error } = useGetMoviesQuery();
    console.log(isLoading);
    console.log(data);
    return <div>Movies</div>;
};

export default Movies;
