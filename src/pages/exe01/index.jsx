
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />


export default function Exe01() {

    const [valorPedido, SetValorPedido] = useState(0)
    const [valorCupom, SetValorCupom] = useState(0)
    const [total, SetTotal] = useState(0)

    function Total() {
        let conta = Number(valorPedido - valorPedido * valorCupom / 100)
        SetTotal(conta.toFixed(2))

    }

    function TeclaPressionada(e) {
        if(e.key == 'Enter')
        Total()
    }


    return (
        <div className="pagina-exe01 pagina">
            <header className="cabecalho">

                <div className=''>

                    <img className='logo' src="/assets/images/logo.jfif" alt="" />
                    <h1> React FreiS</h1>

                </div>

                <div className='abas'>

                    <Link to='/'>
                        <h2 className=''> Início </h2>
                    </Link>

                    <Link to='/sobre'>
                        <h2 className=''> Sobre </h2>
                    </Link>

                </div>
            </header>

            <section>

                <i className="fa-solid fa-circle-arrow-left"></i>
                <h1 className='titulo'>Exercício 01 - Cupom de desconto</h1>
                <div className='justify-center'>
                    <div className='underline-ex01'>
                        {/* Linha Coloridinha */}
                    </div>
                </div>

                <div className='justify-center'>
                    <div className='enunciado'>
                        <h3>Implementar um programa em <b>Javascript</b> para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</h3>
                    </div>
                </div>
                
                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Informe o valor do pedido</b></h2>
                        <input type="text" value={valorPedido} onChange={ e => SetValorPedido(e.target.value)} />

                        <h2><b>Informe o valor do cupom</b></h2>
                        <input type="text" value={valorCupom} onKeyUp={TeclaPressionada} onChange={ e => SetValorCupom(e.target.value)} />

                        <button onClick={Total}>Executar</button>

                    </div>
                </div>
                <h2 className='res'>Resultado: O total é R$ {total}</h2>
            </section>
        </div>
    );
}
