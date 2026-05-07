import Pessoas from "./Pessoas";
import '../../App.css'

export default function ListaPessoas(){
    const lista = [
        {id: "1", nome: "Nivaldo", email: "nivaldo@gmail.com"},
        {id: "2", nome: "Gabriel", email: "gabriel@hotmail.com"},
        {id: "3", nome: "Nathália", email: "nathalia@yahoo.com.br"},
        {id: "4", nome: "Rebeca", email: "rebeca@gmail.com"}
      ];
    return(
        <div className="card">
            <h2>Lista de Usuários</h2>

            {lista.map((item) => (
                <Pessoas
                    key={item.id} className="item-lista"
                    pessoas ={item}
                />
            ))}
        </div>
    );
}