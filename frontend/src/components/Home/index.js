import React from "react";

import "./home.css";


const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "Teste a escolha!"
  },
  {
    emoji: '🎉',
    name: "Acerte a resposta!"
  },
  {
    emoji: '💃',
    name: "Acerte o maior numero de respostas em menor tempo!"
  }
];



export default function Home(){

    const greeting = "greeting";
    return(
      <div className="container7">
        <h1 id={greeting}>Questionario Simples</h1>
        <p>Registre-se e faça o login para jogar!</p>
        <ul>
          {
            emojis.map(emoji => (
              <li key={emoji.name}>
                <button
                  onClick={displayEmojiName}
                >
                  <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
                </button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
