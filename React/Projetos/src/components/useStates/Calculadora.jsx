import React, { useState } from "react";

const Calculadora = () => {
    // Estados para gerenciar o visor, valores na memória e operadores
    const [display, setDisplay] = useState('0'); 
    const [primeiroValor, setPrimeiroValor] = useState(null);
    const [operador, setOperador] = useState(null);
    const [segundoValor, setSegundoValor] = useState(false);

    // Função para tratar a entrada de números
    const inserirNumero = (num) => {
        if (segundoValor) {
            setDisplay(String(num));
            setSegundoValor(false);
        } else {
            setDisplay(display === '0' ? String(num) : display + num);
        }
    };

    // Função para definir a operação (+, -, *, /)
    const definirOperacao = (proximoOperador) => {
        const valorAtual = parseFloat(display);

        if (primeiroValor === null) {
            setPrimeiroValor(valorAtual);
        } else if (operador) {
            const resultado = calcular(primeiroValor, valorAtual, operador);
            setDisplay(String(resultado));
            setPrimeiroValor(resultado);
        }
        setSegundoValor(true);
        setOperador(proximoOperador);
    };

    // Lógica aritmética
    const calcular = (pvalor, svalor, op) => {
        switch (op) {
            case '+': return pvalor + svalor;
            case '-': return pvalor - svalor;
            case '*': return pvalor * svalor;
            case '/': return pvalor / svalor;
            default: return svalor;
        }
    };

    // Reseta a calculadora para o estado inicial
    const limpar = () => {
        setDisplay('0');
        setPrimeiroValor(null);
        setSegundoValor(false);
        setOperador(null);
    };

    // Realiza o cálculo final
    const finalizar = () => {
        if (!operador || segundoValor) return;
        const resultado = calcular(primeiroValor, parseFloat(display), operador);
        setDisplay(String(resultado));
        setPrimeiroValor(null);
        setOperador(null);
        setSegundoValor(false);
    };

    return (
        /* O "Retângulo" da Calculadora: Adicionamos borda, sombra e preenchimento */
        <div className="visorCentralizado">
            <h2 className="visorLcd">
                {display}
            </h2>

            {/* Grid de Botões */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
                <button className="styleLimpar" onClick={limpar}>C</button>
                <button className="styleOperacao" onClick={() => definirOperacao('/')}>/</button>
                <button className="styleOperacao" onClick={() => definirOperacao('*')}>*</button>
                <button className="styleOperacao" onClick={() => definirOperacao('-')}>-</button>

                {[7, 8, 9].map(n => <button key={n} onClick={() => inserirNumero(n)} style={{ padding: '15px' }}>{n}</button>)}
                <button style={{ padding: '15px', background: '#f0ad4e' }} onClick={() => definirOperacao('+')}>+</button>

                {[4, 5, 6].map(n => <button key={n} onClick={() => inserirNumero(n)} style={{ padding: '15px' }}>{n}</button>)}
                <button style={{ gridRow: 'span 2', padding: '15px', background: '#5cb85c', color: 'white' }} onClick={() => finalizar()}>=</button>

                {[1, 2, 3].map(n => <button key={n} onClick={() => inserirNumero(n)} style={{ padding: '15px' }}>{n}</button>)}

                <button onClick={() => inserirNumero(0)} style={{ gridColumn: 'span 2', padding: '15px' }}>0</button>
                <button onClick={() => setDisplay(display.includes('.') ? display : display + '.')} style={{ padding: '15px' }}>.</button>
            </div>
        </div>
    );
};

export default Calculadora;



// Principais Funcionalidades
// Gerenciamento de Estado Dinâmico: O código utiliza display para o que você vê e 
// primeiroValor para o que a calculadora "lembra". Isso permite que você digite números grandes sem perder a referência inicial.

// Lógica de Concatenação vs. Substituição:
// A função inserirNumero sabe quando deve apenas "grudar" um número no outro
// (ex: transformar 1 em 12) e quando deve limpar o visor para começar o segundo número da conta (através do booleano segundoValor).

// Cálculos em Cadeia: A função definirOperacao possui uma verificação 
// inteligente: se você clicar em 5 + 5 e, em vez de clicar em =, clicar em outro +, ela já calcula o 10 e o coloca no visor para continuar a conta.

// Interface com CSS Grid: O uso de display: 'grid' com gridTemplateColumns: 
// 'repeat(4, 1fr)' organiza os botões automaticamente em colunas alinhadas, simulando o layout físico de uma calculadora real.

// Prevenção de Erros de Ponto: No botão do ponto decimal (.), 
// existe uma verificação display.includes('.') que impede o usuário de 
// digitar dois pontos no mesmo número (ex: 1.2.3), o que quebraria a lógica matemática.