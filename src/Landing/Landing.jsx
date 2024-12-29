import "./landing.css";
import dp from "/src/assets/dpp.jpg";

export default function Landing() {
  return (
    <>
      <div className="intro">
        <div className="content">
          <div className="main">KHUSHI PAWAR</div>
          <div className="role">Full Stack Developer</div>
          <div className="byLine">
            Simplifying complexity through thoughtful <br />
            design and meticulous coding. Building seamless <br />
            bridges between innovative ideas and impactful solutions.
          </div>
        </div>
        <div className="mainImg">
          <img src={dp}></img>
        </div>
      </div>
    </>
  );
}
