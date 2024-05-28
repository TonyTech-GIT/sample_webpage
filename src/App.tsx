import "./App.scss";
import { Nav } from "./components";
import { About, Footer } from "./sections";
import "./scss/_variables.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      {/* <h1>Hello World</h1> */}
      <section className="padding">
        <About />
      </section>
      <section className="padding">
        <Footer />
      </section>
    </div>
  );
}

export default App;
