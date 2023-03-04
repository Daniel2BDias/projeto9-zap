import { useState } from "react";
import styled from "styled-components";
import virar from "../assets/seta_virar.png"
import Botoes from "./Botoes";

export default function Zapmaior ({card, id, responde, zap}) {

    const [respondido, setRespondido] = useState(false);

    const respondeZap = (respondido) => {
        setRespondido(!respondido)
    };

    return (
        <ZapMaior data-test="flashcard" respondido={respondido} id={id}>
            <div>
            <h1 data-test="flashcard-text">{respondido ?  card.answer : card.question}</h1>
            {respondido ? <Botoes zap={zap} id={id} responde={responde} /> : <img data-test="turn-btn" alt={virar} src={virar} onClick={() => respondeZap(respondido)} />}
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
        box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2);

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