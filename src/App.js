import { useState } from "react";
import BarraSuperior from "./components/BarraSuperios";
import BarraInferior from "./components/BarraInferior";
import Main from "./components/Main";
import GlobalStyle from "./GlobalStyles";

const [zap, setZap] = useState(false);

const ViraZap = (zap) => {
  setZap(!zap);
};

function App() {
  return (
    <>
    <GlobalStyle/>
    <BarraSuperior/>
    <Main/>
    <BarraInferior/>
    </>
  );
}

export default App;
