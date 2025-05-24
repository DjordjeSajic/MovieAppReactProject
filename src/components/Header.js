import "../css/Header.css"
import "../css/style.css"
import ToggleDarkMode from "./ToggleDarkMode";
function Header(){
    return(
        <>
        <div className="container-fluid top-bar">
            <p>MovieReview</p>
              <ToggleDarkMode/>
              <br/>
        
        </div>
        </>
    );
}
export default Header;