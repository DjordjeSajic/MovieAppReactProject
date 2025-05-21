export const fetchMovies= async(searchText,moviesCallback,errorCallback) =>{
    try{
        const response=await fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=f762b390`)
        const data=await response.json();
    

        if(data.Response=='True'){
        moviesCallback(data.Search)
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