 import BarraSuperior from "./components/BarraSuperios";
import BarraInferior from "./components/BarraInferior";
import Main from "./components/Main";
import GlobalStyle from "./GlobalStyles";
import cards from "./cards";


function App() {
  return (
    <>
    <GlobalStyle/>
    <BarraSuperior/>
    <Main cards={cards}/>
    <BarraInferior respondido={1} total={1}/>
    </>
  );
}

export default App;
