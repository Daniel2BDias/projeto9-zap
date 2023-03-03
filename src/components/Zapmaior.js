import { useState } from "react";
import styled from "styled-components";
import virar from "../assets/seta_virar.png"

export default function Zapmaior ({card, key}) {

    const [respondido, setRespondido] = useState(false);

    const respondeZap = (respondido) => {
        if(respondido){return};
        setRespondido(!respondido)
    };

    return (
        <ZapMaior respondido={respondido}>
            <div>
            <hi>{respondido ?  card.answer : card.question}</hi>
            <img src={virar} onClick={() => respondeZap(respondido)} />
            </div>
        </ZapMaior>
        )
};


const ZapMaior = styled.section`
        height: 131px;
        width: 300px;
        background-color: #FFFFD4;
        border-radius: 5px;
        margin-bottom: 30px;
        position: relative;

        div {
            padding: 10px;
        }

        h1 {
            font-size: 18px;
            font-weigth: 400;
        }

        img {
            height: 20px;
            width: 25px;
            position: absolute;
            bottom: 10px;
            right: 10px;
        }
`;