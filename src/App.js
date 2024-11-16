import Termekek from "./components/Termekek";
import TermekUrlap from "./components/TermekUrlap";

function App() {
  return (
    <div className="container">
      <header className="App-header"><h1>FakeStore Webshop</h1></header>
      <section>
        <TermekUrlap/>
      </section>
      <article>
        <Termekek />
      </article>
      <footer>@massanyicsilla</footer>
    </div>
  );
}

export default App;
