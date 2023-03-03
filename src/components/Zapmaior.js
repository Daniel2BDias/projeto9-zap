import { useState } from "react";
import styled from "styled-components";
import virar from "../assets/seta_virar.png"
import Botoes from "./Botoes";

export default function Zapmaior ({card, id, funcao}) {

    const [respondido, setRespondido] = useState(false);

    const respondeZap = (respondido) => {
        setRespondido(!respondido)
    };

    return (
        <ZapMaior respondido={respondido} id={id}>
            <div>
            <h1>{respondido ?  card.answer : card.question}</h1>
            {respondido ? <Botoes id={id} funcao={funcao} /> : <img alt={virar} src={virar} onClick={() => respondeZap(respondido)} />}
            </div>
        </ZapMaior>
        )
};


    const ZapMaior = styled.section`
        
        display: flex;
        justify-content: center;
        align-items: flex-start;
        height: auto;
        width: 300px;
        background-color: #FFFFD4;
        border-radius: 5px;
        margin-bottom: 30px;
        position: relative;
        padding: 10px;

        div {
            height: 80%;
            width: 100%;
            box-sizing: border-box;
        }

        h1 {
            font-size: 18px;
            font-weigth: 400;
            align-self: flex-start;
        }

        img {
            height: 20px;
            width: 25px;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }

        img:hover {
            cursor: pointer;
        }

        img:active {
            transform: scale(0.9);
        }

        &:last-child {
            align-self: flex-end;
        }
    `;