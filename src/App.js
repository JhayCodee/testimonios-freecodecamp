import "./App.css";
import Testimonio from "./components/Testimonio";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre="Shawn Wang"
          pais="Singapore"
          cargo="Full Stack Developer"
          empresa="Amazon"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
          imagen={require("./img/shawn.png")}
        />
        <Testimonio
          nombre="Sarah Chima"
          pais="Nigeria"
          cargo="Full Stack Developer"
          empresa="ChatDesk"
          testimonio="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
          imagen={require("./img/sarah.png")}
        />
        <Testimonio
          nombre="Emma Bostian"
          pais="Sweden"
          cargo="Software Engineer"
          empresa="Spotify"
          testimonio="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company"
          imagen={require("./img/emma.png")}
        />
      </div>
    </div>
  );
}

export default App;
