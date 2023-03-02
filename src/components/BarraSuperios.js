import styled from "styled-components"
import logo from "../assets/logo.png"
export default function BarraSuperior () {
    return (
        <Superior>
            <img src={logo}/>
            <h1>ZapRecall</h1>
        </Superior>
    )
};


const Superior = styled.header`
height: 200px;
width: 100%;
background-color: #FB6B6B;
font-family: 'Righteous'; cursive;
font-size: 36px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 1;

img {
    height: 90px;
    width: 52px;
    margin: 0 25px 0 0;
}
`