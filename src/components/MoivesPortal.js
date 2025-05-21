import { useState } from "react";

function MoviePortal(){

    const [searchInputText,setSearchInputText]=useState('')
    const [enteredSearchText,setEnteredSearchText]=useState('')
    
    const onEnteredSearch= (e) =>{
        e.preventDefault();
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
        </>
    );
}
export default MoviePortal;