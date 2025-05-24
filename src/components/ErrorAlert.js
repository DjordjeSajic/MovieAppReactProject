function ErrorAlert({error,searchTerm}){
    return(
    <div class="alert alert-dismissible alert-danger">
        <strong>Oh snap!</strong> Not a single movie found. Look up another movie.
    </div>
    )
}
export default ErrorAlert