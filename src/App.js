import 'bootstrap/dist/js/bootstrap.js';
import 'bootswatch/dist/darkly/bootstrap.min.css'
import Header from './components/Header';
import MoviePortal from './components/MoviesPortal';

function App () {
  return(
    <div>
      <Header/>
      <br />
      <div className='container'>
        <MoviePortal/>
      </div>

    </div>
  )
}

export default App;
