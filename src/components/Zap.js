import { useState } from "react"
import Zapmaior from "./Zapmaior"
import Zapmenor from "./Zapmenor"




function Zap ({card, id, funcao, respondidos}) {

    const [zap, setZap] = useState(false);

    const ViraZap = (zap) => {
        setZap(!zap);
      };

    return (
        <div>
            {zap ? <Zapmaior key={id} respondidos={respondidos} funcao={funcao} id={id} card={card}/> : <Zapmenor key={id} id={id} zap={zap} virazap={() => ViraZap(zap)}/>}
        </div>
    )
};

export default Zap;