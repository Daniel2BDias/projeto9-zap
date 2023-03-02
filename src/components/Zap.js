import styled from "styled-components"
import cards from "../cards"
import virar from "../assets/seta_virar.png"
import play from "../assets/seta_play.png"

export default function Zap ({virazap, zap}) {
    return (
        <ZapContent zap={zap}>
            <h1>{zap ? cards.question : cards.answer}</h1>
            <img alt='Zap!!' src={zap ? play : virar} onClick={() => virazap(zap)}/>
        </ZapContent>
    )
};


const ZapContent = styled.section`
height: ${props => props.zap ? '131px' : '65px'};
width: 300px;
background-color: #FFFFD4;
border-radius: 5px;
margin: 30px 0;
position: relative;

img {
    height: 15%;
    width: 10%;
    position: absolute;
    bottom: 5px;
    right: 5px;
}
`