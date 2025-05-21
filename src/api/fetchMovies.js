export const fetchMovies= async(searchText,moviesCallback,errorCallback) =>{
    try{
        const response=await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f762b390`)
        const data=await response.json();
    

        if(data.Response==='True'){
            const movieDetailsPromis=data.Search.map((movie) => fetchMovieDetails(movie.imdbID, errorCallback))
            const movieDetails= await Promise.all(movieDetailsPromis);

            moviesCallback(movieDetails)
            errorCallback(null);
        }else{
            moviesCallback([]);
            errorCallback(data.Error);
        }


    }catch(err){
        moviesCallback([]);
        errorCallback('An error occured while fetching movie data');
    }
};

const fetchMovieDetails=async (id,errorCallback) => {
    try{
        const response= await fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=f762b390`)
        const data=await response.json();

        if(data.Response === 'True'){
            return data;
        }else{
            throw new Error(data.Error);
        }
    }catch(err){
        errorCallback('An error occurred while fetching movie details');
    }
};