import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";
import ErrorAlert from "./ErrorAlert";
import MovieDetail from "./MovieDetail";
import "../css/MoviesPortal.css"
import "../css/style.css"
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
            <div className="col-12 container-fixed">
            <form onSubmit={onEnteredSearch}>
                <input
                    type="text" placeholder="Search..." className="form-input" id="search-bar"
                    value={searchInputText}
                    onChange={(e) => setSearchInputText(e.target.value)} 
                    />
                <input type="submit" value="⌕" id="search-submit" onSubmit={onEnteredSearch} className="form-button"/>
            </form>
            </div>
        </div>
        {error && <ErrorAlert error={error} searchTerm={enteredSearchText} />}
        {movies.length>0 && <p className="search">Showing {movies.length} Movies for '{enteredSearchText}'</p>}
           <div className="container movie-container">
                     {movies.map((movie) => (
                <MovieDetail key={movie.imdbID} movie={movie} />
               
            ))}
            </div>
        </>
    );
}
export default MoviePortal;