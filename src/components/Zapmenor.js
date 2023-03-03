import styled from "styled-components";
import play from "../assets/seta_play.png"


export default function Zapmenor ({ virazap, zap, id}) {
    return (
        <ZapMenor>
            <h1>pergunta {id+1}</h1>
            <img src={play} onClick={() => virazap(zap)}/>
        </ZapMenor>
    );
};


const ZapMenor = styled.section`
        height: 65px;
        width: 300px;
        background-color: #FFFFFF;
        border-radius: 5px;
        margin-bottom: 30px;
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: center;


        h1 {
            margin-left: 25px;
            font-size: 16px;
            font-weigth: 700;
        }

        img {
            height: 20px;
            width: 20px;
            position: absolute;
            bottom: 21px;
            right: 20px;
        }
;`