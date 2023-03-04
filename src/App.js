import { useState } from "react"; 
import BarraSuperior from "./components/BarraSuperios";
import BarraInferior from "./components/BarraInferior";
import Main from "./components/Main";
import GlobalStyle from "./GlobalStyles";
import cards from "./cards";
import Welcome from "./Welcome";


function App() {

  const [concluidos, setConcluidos] = useState(0);
  const [respondidos, setRespondidos] = useState([]);
  const [inicio, setInicio] = useState(true);
  
  const adicionaConcluido = (id) => {
    if(respondidos.includes(id)){return};
    setConcluidos(concluidos+1);
    setRespondidos([...respondidos, id]);
  };

  const iniciar = () => {
    setInicio(!inicio);
  }
  
  return (
    <>

    {inicio 
    
    ?

    <>
    <GlobalStyle/>
    <Welcome iniciar={iniciar}/>
    </> 

    :

    <>
    <GlobalStyle/>
    <BarraSuperior/>
    <Main cards={cards} adiciona={adicionaConcluido} respondidos={respondidos}/>
    <BarraInferior respondido={concluidos} total={cards.length}/>
    </>}
    </>
  
    );
};

export default App;
