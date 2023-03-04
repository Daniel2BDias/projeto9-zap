import { useState } from "react"
import Zapmaior from "./Zapmaior"
import Zapmenor from "./Zapmenor"


function Zap ({card, id, funcao, respondidos}) {

    const [zap, setZap] = useState(false);
    const [riscado, setRiscado] = useState(false);

    const ViraZap = (zap) => {
        setZap(!zap);
        Riscado();
      };

      const Riscado = () => {
        if(riscado){return};
        setRiscado(!riscado)
      }

    return (
        <div>
            {zap ? <Zapmaior key={id} zap={ViraZap} respondidos={respondidos} funcao={funcao} id={id} card={card}/> : <Zapmenor key={id} id={id} riscado={riscado} Riscado={Riscado} zap={zap} virazap={ViraZap}/>}
        </div>
    )
};

export default Zap;