import { useEffect, useState } from "react"
import "../css/ToggleDarkMode.css"
const ToggleDarkMode=()=>{
    const [isDarkMode,setisDarkMode]=useState(false);
    const DarkModeOn=()=>{
        setisDarkMode(!isDarkMode);
    };
    useEffect(()=>{
        document.body.style.backgroundColor= isDarkMode? "black" : "white";
        document.body.style.color=isDarkMode? "white": "black";
        document.body.style.transition="background-color 0.3s,color 0.3s";
        const btn=document.getElementById("tdm");
        if(btn){
            btn.innerText=isDarkMode? "🌙":"☀️";
            btn.style.backgroundColor=isDarkMode? "#030247":" #FFFFC5";
            btn.style.color=isDarkMode? "white":"black";
        }
             

    },[isDarkMode])
    return (
        <div>
        <button id="tdm" onClick={DarkModeOn}></button>
        </div>
    )
}
export default ToggleDarkMode;