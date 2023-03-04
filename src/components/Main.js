import styled from "styled-components";
import Zap from "./Zap";

export default function Main({ adiciona, cards, respondidos, icone }) {
    return (
        <MainContent>
            {cards.map((card, i) => <Zap key={i} icone={icone} respondidos={respondidos} adiciona={adiciona} id={i} card={card} />)}
        </MainContent>
    )
};


const MainContent = styled.main`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
margin: 200px 0 70px 0;
background-color: #FB6B6B;
height: 100%
width: 100%;
box-sizing: border-box;
`