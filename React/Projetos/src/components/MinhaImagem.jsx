import "../App.css"
function MinhaImagem ({nome,imagem}) {
    return(
        <div>  
            <img className="imagem" src={imagem}></img>
            <p>Imagem do React para exemplo</p>

            <h2>Bem vindo {nome}</h2>

        </div>
    )
}
export default MinhaImagem