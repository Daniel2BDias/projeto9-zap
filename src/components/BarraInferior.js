import styled from "styled-components"

export default function BarraInferior ({respondido, total}) {
    return (
        <Inferior value={respondido} t={total}>
            <h1>{respondido}/{total} Concluídos</h1>
        </Inferior>
    )
};


const Inferior = styled.footer`
height: 70px;
width: 100%;
background-color: #FFFFFF;
color: ${props => props.value === props.t ? '#2FBE34' : '#000000'};
position: fixed;
bottom: 0;
left: 0;
z-index: 1;
display: flex;
justify-content: center;
algin-items: center;
`