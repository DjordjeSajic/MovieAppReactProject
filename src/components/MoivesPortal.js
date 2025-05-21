import { useState } from "react";
import { fetchMovies } from "../api/fetchMovies";

function MoviePortal(){

    const [searchInputText,setSearchInputText]=useState('')
    const [enteredSearchText,setEnteredSearchText]=useState('')
    const [movies,setMovies]=useState([])
    const [error,setError]=useState(null)




    const onEnteredSearch= (e) =>{
        e.preventDefault();
        fetchMovies(searchInputText,setMovies,setError)
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
        {enteredSearchText}
        {JSON.stringify(movies)}
        {error}
        </>
    );
}
export default MoviePortal;