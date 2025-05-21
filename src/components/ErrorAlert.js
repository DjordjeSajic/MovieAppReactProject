function ErrorAlert({error,searchTerm}){
    return(
    <div class="alert alert-dismissible alert-danger">
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        <strong>Oh snap!</strong> <a href="#" class="alert-link">Not a single movie found</a> try another movie.
    </div>
    )
}
export default ErrorAlert