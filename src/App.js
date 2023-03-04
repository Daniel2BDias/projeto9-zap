import { useState } from "react";
import BarraSuperior from "./components/BarraSuperios";
import BarraInferior from "./components/BarraInferior";
import Main from "./components/Main";
import GlobalStyle from "./GlobalStyles";
import cards from "./cards";
import Welcome from "./Welcome";
import certo from "./assets/icone_certo.png";
import quase from "./assets/icone_quase.png";
import errado from "./assets/icone_erro.png";


function App() {

  const [concluidos, setConcluidos] = useState(0);
  const [respondidos, setRespondidos] = useState([]);
  const [inicio, setInicio] = useState(true);
  const [respondido, setRespondido] = useState([]);

  const adicionaConcluido = (id) => {
    if (respondidos.includes(id)) { return };
    setConcluidos(concluidos + 1);
    setRespondidos([...respondidos, id]);
  };

  const iniciar = () => {
    setInicio(!inicio);
  }

  const iconeRodape = (icone) => {

    console.log({icone})
    if (icone === "certo") {
      icone = certo
    } else if (icone === "erro") {
      icone = errado
    } else {
      icone = quase
    };
    setRespondido([...respondido, icone]);
  }

  return (
    <>

      {inicio

        ?

        <>
          <GlobalStyle />
          <Welcome iniciar={iniciar} />
        </>

        :

        <>
          <GlobalStyle />
          <BarraSuperior />
          <Main cards={cards} icone={iconeRodape} adiciona={adicionaConcluido} respondidos={respondidos} />
          <BarraInferior errado={errado} certo={certo} quase={quase} icone={respondido} respondido={concluidos} total={cards.length} />
        </>}
    </>

  );
};

export default App;
