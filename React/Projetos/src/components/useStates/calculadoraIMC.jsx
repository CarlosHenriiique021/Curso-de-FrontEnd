import React, { useState } from 'react';

//3ª Forma de declarar e exportar o componente
const CalculoIMC = () => {  
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');  
    const [resultado, setResultado] = useState(0);

    const calcularIMC = () => {
        // Validação simples para evitar divisão por zero ou campos vazios
        if (peso > 0 && altura > 0) {
            const imc = peso / (altura * altura);
            setResultado(imc.toFixed(2));
        } else {
            alert("Por favor, insira valores válidos!");
        }
    };

    return (
        <div>
            <h1>Calculo de IMC</h1>
            
            <label>Digite seu peso (Kg):</label>
            <input 
                type="number" 
                placeholder="Ex: 70" 
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />
            
            <br /><br />

            <label>Digite sua altura (m):</label>
            <input 
                type="number" 
                placeholder="Ex: 1.75" 
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />

            <br /><br />

            <button onClick={calcularIMC}>Calcular</button>

            {resultado > 0 && (
                <h2>Seu IMC é: {resultado}</h2>
            )}
        </div>
    );
}

export default CalculoIMC;