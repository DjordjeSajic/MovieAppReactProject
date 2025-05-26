import '../css/MovieDetail.css'
import "../css/style.css"
function MovieDetail({movie}){
   return (
        <>
            <div className="row movie-row">
                <div className="col-md-5 image-container">
                    <img src={movie.Poster} className='poster' alt={movie.Title} />
                    <div className='overlay d-flex align-items-center justify-content-center'>
                          <a href={`https://www.youtube.com/results?search_query=${movie.Title} trailer`}>Watch Trailer</a>
                    </div>
                </div>
                <div className='col-md-5 card-col'>
                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">{movie.Title}</h3>
                            <h6 className="card-subtitle mb-2">{movie.Released}</h6>
                            <a href={`https://www.imdb.com/title/${movie.imdbID}`} class="card-link">IMDB </a>
                            <div className="container card-text">{movie.Plot}</div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );

}

export default MovieDetail 