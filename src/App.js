import { Helmet } from "react-helmet";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chatinun Portfolio</title>
      </Helmet>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
