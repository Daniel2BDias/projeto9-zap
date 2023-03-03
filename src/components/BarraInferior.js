import styled from "styled-components"

export default function BarraInferior () {
    return (
        <Inferior>
            <h1>*/* Concluídos</h1>
        </Inferior>
    )
};


const Inferior = styled.footer`
height: 70px;
width: 100%;
background-color: #FFFFFF;
position: fixed;
bottom: 0;
left: 0;
z-index: 1;
display: flex;
justify-content: center;
algin-items: center;
`