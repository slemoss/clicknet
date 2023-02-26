import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Initial from "./components/pages/initial";
import Plan from "./components/plan";
import Sobre from "./components/sobre";

function App() {
  return (
    <>
      <Initial />
      <Plan />
      <Sobre />
      <Link to="/">Home</Link>
      <Link to="/pag1">Pagina 1</Link>
      <Link to="/pag2">Pagina 2</Link>
      <Link to="/pag3">Pagina 3</Link>
    </>
  );
}

export default App;
