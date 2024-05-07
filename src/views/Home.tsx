import FlipCard from "../components/FlipCard/FlipCard"
import {ReactTyped} from "react-typed";
import "./home.css"

const Home = () => {
  return (
    <section className="p-5 hero">
      <section className="container">
        <div className="row">
          <div className="col">
            <FlipCard />
          </div>
          <div className="col">
          <h1>
            I'm a{" "}
            <ReactTyped
              strings={["Developer", "Writer", "Designer"]}
              typeSpeed={100}
              loop
              backSpeed={20}
              cursorChar=">"
              showCursor={true}
            />
          </h1>
          </div>
        </div>
      </section>
    </section>
    
  )
}

export default Home