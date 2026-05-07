import MinhaImagem from "./props/MinhaImagem";
import { useState } from "react";

function MudarImagem(){
    const img1 = "https://www.programacion.com.py/wp-content/uploads/2016/11/react-logo.png";
    const img2 ="https://bashalog.c-brains.jp/images/cat_react.png";
    let texto = "contador";
    const [valor, setValor] = useState(0) 
   return (
    
    <div>
        <h1>Digite o seu nome</h1>
        <input placeholder="Nome"></input>
        <br/>
        <br/>
       
        <button>Entrar</button>
        
          <MinhaImagem imagem={img2}/>
          <h2>{texto}</h2>
          <p>{valor}</p>
          <button onClick={()=>setValor(valor+1)}>Incrementar
          </button>
             <br/>
            <br/>
        <button onClick={()=>setValor(0)}>zerar</button>
    </div>
);
}

export default MudarImagem