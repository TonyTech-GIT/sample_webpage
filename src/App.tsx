import "./App.scss";
import { Nav } from "./components";
import { About, Footer } from "./sections";
import "./scss/_variables.scss";

function App() {
  return (
    <div className="app">
      <Nav />
      <section className="padding">
        <About />
      </section>
      {/* <section className="padding">
        
      </section> */}
      <Footer />
    </div>
  );
}

export default App;
