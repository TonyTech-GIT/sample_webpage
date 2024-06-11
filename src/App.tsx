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

      <Footer />
    </div>
  );
}

export default App;
