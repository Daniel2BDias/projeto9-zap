import styled from "styled-components";
import party from "../assets/party.png";
import sad from "../assets/sad.png";
import certo from "../assets/icone_certo.png";
import quase from "../assets/icone_quase.png";
import errado from "../assets/icone_erro.png";

export default function BarraInferior({ respondido, total, icone, errado, certo, quase}) {

    console.log({icone})
    return (
        <Inferior data-test="footer" value={respondido} t={total}>
            {respondido === total && icone.includes(errado)
                ?
                <Mensagem data-test="finish-text">
                    <h1><img src={sad} />   Putz...</h1>
                    <p>
                        Ainda faltam alguns...<br />
                        Mas não desanime!
                    </p>
                </Mensagem>
                :
                respondido === total && !icone.includes(errado)
                    ?
                    <Mensagem data-test="finish-text">
                        <h1><img src={party} />   Parabéns!</h1>
                        <p>
                            Você não esqueceu de nenhum flashcard!
                        </p>
                    </Mensagem>
                    :
                    <Mensagem data-test="finish-text"></Mensagem>
            }
            <div>
                <h1>{respondido}/{total} Concluídos</h1>
                <Icones>
                    {icone.map(i => <img data-test={i === certo ? "zap-icon" : i === errado ? "no-icon" : "partial-icon"} src={i} /> )}
                </Icones>
            </div>
        </Inferior>
    )
};


const Inferior = styled.footer`
width: 100%;
background-color: #FFFFFF;
color: #000000;
position: fixed;
bottom: 0;
left: 0;
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
algin-items: center;
box-sizing: border-box;

div {
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 20px;
    
        h1 {
            height: 18px;
            font-size: 18px;
            font-weight: 400;
        }
    }
`;

const Icones = styled.span`
    img {
        margin-right: 5px;
    }
`;

const Mensagem = styled.div`
    height: 5px;
    font-size: 18px;
    text-align: center;
    color: #000000;

    h1 {
        font-weight: 700;
    }

    p {
        white-space: pre-wrap;
    }
`
