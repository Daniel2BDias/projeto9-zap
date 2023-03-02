import styled from "styled-components";
import Zap from "./Zap";

export default function Main() {
    return (
        <MainContent>
            <Zap />
            <Zap />
            <Zap />
            <Zap />
            <Zap />
            <Zap />
            <Zap />
            <Zap />
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