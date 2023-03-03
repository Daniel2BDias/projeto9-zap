import styled from "styled-components";
import Zap from "./Zap";
import cards from "../cards";

export default function Main({funcao}) {
    return (
        <MainContent>
            {cards.map((card, i) => <Zap key={i} funcao={funcao} id={i} card={card} />)}
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
`