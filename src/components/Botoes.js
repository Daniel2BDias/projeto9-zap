import styled from "styled-components"

export default function Botoes ({funcao}) {
    return (
        <Coloridos>
            <button onClick={funcao}>Não Lembrei</button>
            <button onClick={funcao}>Quase não lembrei</button>
            <button onClick={funcao}>Zap!</button>
        </Coloridos>
    )
};


const Coloridos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

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

    & button:nth-child(1):hover {
        cursor: pointer;
    }

    & button:nth-child(2):hover {
        cursor: pointer;
    }

    & button:nth-child(3):hover {
        cursor: pointer;
    }

    & button:nth-child(1):active {
        transform: scale(0.97);
    }

    & button:nth-child(2):active {
        transform: scale(0.97);
    }

    & button:nth-child(3):active {
        transform: scale(0.97);
    }

    &

    &
`



