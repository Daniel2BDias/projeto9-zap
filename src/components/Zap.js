import styled from "styled-components"
import { useState } from "react"
import virar from "../assets/seta_virar.png"
import play from "../assets/seta_play.png"
import Zapmaior from "./Zapmaior"
import Zapmenor from "./Zapmenor"




function Zap ({card, id}) {

    const [zap, setZap] = useState(false);

    const ViraZap = (zap) => {
        setZap(!zap);
      };

    return (
        <div>
            {zap ? <Zapmaior key={id} id={id} card={card}/> : <Zapmenor key={id} id={id} zap={zap} virazap={() => ViraZap(zap)}/>}
        </div>
    )
};

export default Zap;


const ZapContent = styled.section`
height: ${props => props.zap ? '131px' : '65px'};
width: 300px;
background-color: ${props => props.zap ? '#FFFFD4' : '#FFFFFF'};
border-radius: 5px;
margin-bottom: 30px;
position: relative;

img {
    height: 20px;
    width: 20px;
    position: absolute;
    bottom: ${props => props.zap ? '10px' : '21px'};
    right: ${props => props.zap ? '10px' : '20px'};
}
`