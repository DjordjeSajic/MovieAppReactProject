import '../css/MovieDetail.css'
function MovieDetail({movie}){
   return (
        <>
            <div className="row">
                <div className="col-md-2 image-container">
                    <img src={movie.Poster} alt={movie.Title} width='100%'height='80%' />
                    <div className='overlay d-flex align-items-center justify-content-center'>
                          <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`}>Watch Trailer</a>
                    </div>
                </div>
                <div class='col-md-10'>
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{movie.Title}</h3>
                            <h6 class="card-subtitle mb-2 text-muted">{movie.Released}</h6>
                            <p class="card-text">{movie.Plot}</p>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`} class="card-link">IMDB </a>
                        </div>
                    </div>
                </div>

            </div>
            <br/>
        </>
    );

}

export default MovieDetail 