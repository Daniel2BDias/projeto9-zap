import styled from "styled-components";
import play from "../assets/seta_play.png";
import certo from "../assets/icone_certo.png";
import errado from "../assets/icone_erro.png";
import quase from "../assets/icone_quase.png";


export default function Zapmenor({ virazap, zap, id, riscado, resultado }) {

    return (
        <ZapMenor data-test="flashcard" riscado={riscado} cor={resultado}>
            <h1 data-test="flashcard-text">pergunta {id + 1}</h1>
            {riscado ?
                <img
                    data-test={resultado === "certo" ? "zap-icon" : resultado === "erro" ? "no-icon" : "partial-icon"}
                    src={resultado === "certo" ? certo : resultado === "erro" ? errado : quase}
                />
                :
                <img data-test="play-btn" alt={play} src={play} onClick={() => virazap(zap)} />
            }
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
        box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2);


        h1 {
            margin-left: 25px;
            font-size: 16px;
            font-weigth: 700;
            text-decoration: ${props => !props.riscado ? 'none' : 'line-through'};
            color: ${props => props.cor === 'certo' ? '#2FBE34' :
        props.cor === 'erro' ? '#FF3030' :
            props.cor === 'quase' ? '#FF922E' :
                '#000000'};
        }

        img {
            height: 20px;
            width: 20px;
            position: absolute;
            bottom: 21px;
            right: 20px;
        }

        img:hover {
            cursor: pointer;
        }

        img:active {
            transform: scale(0.9);
        }
;`