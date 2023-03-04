import { useState } from "react"
import Zapmaior from "./Zapmaior"
import Zapmenor from "./Zapmenor"


function Zap ({card, id, adiciona, respondidos}) {

    const [zap, setZap] = useState(false);
    const [riscado, setRiscado] = useState(false);
    const [resultado, setResultado] = useState("");

    const result = (res) => {
        setResultado(res)
    }

    const Riscado = () => {
        if(riscado){return};
        setRiscado(!riscado)
      }

    const ViraZap = (zap) => {
        setZap(!zap);
        Riscado();
      };

      const responde = (id, zap, resultado) => {
        adiciona(id);
        ViraZap(zap);
        result(resultado)
      }

    return (
        <div>
            {zap ? 

            <Zapmaior key={id} zap={zap} respondidos={respondidos} 
            responde={responde} id={id} card={card}/> : 

            <Zapmenor key={id} resultado={resultado} id={id} riscado={riscado} Riscado={Riscado} 
            zap={zap} virazap={ViraZap}/>}
        </div>
    )
};

export default Zap;