import Header from './components/Header';
import MoviePortal from './components/MoviesPortal';
import "./css/style.css"
import "./css/App.css"
function App () {
  return(
    <div className='App'>
      <Header/>
      <br />
      <div className='container body-container' >
        <MoviePortal/>
      </div>

    </div>
  )
}

export default App;
