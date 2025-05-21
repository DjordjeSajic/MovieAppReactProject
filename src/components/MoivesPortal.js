import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./ErrorAlert";
import MovieDetail from "./MovieDetail";
function MoviePortal(){

    const [searchInputText,setSearchInputText]=useState('')
    const [enteredSearchText,setEnteredSearchText]=useState('')
    const [movies,setMovies]=useState([])
    const [error,setError]=useState(null)




    const onEnteredSearch= (e) =>{
        e.preventDefault();
        fetchMovies(searchInputText,setMovies,setError, ()=>setEnteredSearchText(searchInputText))
        setEnteredSearchText(searchInputText);
    };
    
    return(
        <>
        <div className="row">
            <div className="col-md-12">
            <form onSubmit={onEnteredSearch}>
                <input
                    type="text" placeholder="Search" className="form-control"
                    value={searchInputText}
                    onChange={(e) => setSearchInputText(e.target.value)} 
                    />
            </form>
            </div>
        </div>
        {error && <ErrorAlert error={error} searchTerm={enteredSearchText} />}
        {movies.length>0 && <p className='text-light'>Showing {movies.length} Movies for '{enteredSearchText}'</p>}
         {movies.map((movie) => (
                <MovieDetail key={movie.imdbID} movie={movie} />
            ))}
        </>
    );
}
export default MoviePortal;