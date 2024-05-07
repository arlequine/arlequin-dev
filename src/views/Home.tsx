import FlipCard from "../components/FlipCard/FlipCard"
import ArlequinImg from "../assets/arlequin.png"
import {ReactTyped} from "react-typed";
import "./home.css"

const Home = () => {
  return (
    <section className="p-5 hero">
      <section className="container">
        <div className="row">
          <div className="col-md-6 d-none d-md-block">
            <FlipCard />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
          <h1 className="display-1">
            {/* I'm a{" "}
            <ReactTyped
              strings={["Developer", "Writer", "Designer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            /> */}
            Arlequien Dev
          </h1>
          <p className="display-5">full-stack developer</p>
          </div>
        </div>
          <div className=" col-12 d-block d-md-none d-lg-none">
            <img src={ArlequinImg} alt="Arlequin" />
          </div>
      </section>
    </section>
    
  )
}

export default Home