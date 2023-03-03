import styled from "styled-components"

export default function Botoes ({funcao, id}) {
    console.log({id});
    return (
        <Coloridos>
            <button onClick={() => funcao(id)}>Não Lembrei</button>
            <button onClick={() => funcao(id)}>Quase não lembrei</button>
            <button onClick={() => funcao(id)}>Zap!</button>
        </Coloridos>
    )
};


const Coloridos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    button {
        width: 85px;
        height: 37px;
        box-shadow: none;
        border: none;
        border-radius: 5px;
        text-align: center;
        color: #FFFFFF;
    }

    & button:nth-child(1) {
        background-color: #FF3030;
    }

    & button:nth-child(2) {
        background-color: #FF922E;
    }

    & button:nth-child(3) {
        background-color: #2FBE34;
    }

    & button:hover {
        cursor: pointer;
    }

    & button:active {
        transform: scale(0.97);
    }
`



