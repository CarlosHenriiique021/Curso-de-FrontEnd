import "../App.css"
  
function MinhaTabela() {
  return (
    <div className="wrapper">
      <table className="minimal-table">
        <thead>
          <tr>
            <th>Tecnologia</th>
            <th>Uso</th>
          </tr>
        </thead>
        <tbody>
          {[
            { nome: 'React', uso: 'Frontend' },
            { nome: 'Vite', uso: 'Build' },
            { nome: 'JSX', uso: 'Sintaxe' }
          ].map((item, i) => (
            <tr key={i}>
              <td>{item.nome}</td>
              <td>{item.uso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MinhaTabela