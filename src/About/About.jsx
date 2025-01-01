import './about.css'
import abt from "/src/assets/abt.png";

export default function About(){

    return(
        <>
        <div className="aboutHead">About</div>
        <div className="aboutImg">
            <img src={abt}></img>
        </div>
        </>
    )
}