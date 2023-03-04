import styled from "styled-components";
import logo from "./assets/logo.png";

export default function Welcome ({iniciar}) {
    return (
        <WelcomeStyle>
            <div>
                <img src={logo}/>
                <h1>ZapRecall</h1>
                <button data-test="start-btn" onClick={iniciar}>Iniciar Recall!</button>
            </div>
        </WelcomeStyle>
    )
};


const WelcomeStyle = styled.div`

    font-family: 'Righteous', sans-serif;
    color: #FFFFFF;
    
    div {

        flex-direction: column;
        display: inline-block
        align-items: center;
        text-align: center;
        margin-top: 10rem;

        button {
            border: solid 1px #D70900;
            color: #D70900;
            font-family: 'recursive', sans-serif;
            font-size: 18px;
            height: 55px;
            width: 245px;
            border-radius: 5px;
            box-shadow: 2px 4px 4px 0px rgba(0, 0, 0, 0.2);
        }

        button:hover{
            cursor: pointer;
        }

        button:active {
            transform: scale(0.97);
        }
    }

`