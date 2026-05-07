import '../../App.css'
import ListaPessoas from './ListaPessoas';

export default function Pessoas({pessoas}){
    return(
        <div  className="card">
            <p><strong>Nome</strong> {pessoas.nome}</p>
            <p><strong>Email</strong> {pessoas.email}</p>
        </div>
    ); 
}