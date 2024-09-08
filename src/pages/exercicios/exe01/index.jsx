
import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';
import './index.scss';

import { useState } from 'react';


export default function Exe01() {

    const [valorPedido, SetValorPedido] = useState(0)
    const [valorCupom, SetValorCupom] = useState(0)
    const [total, SetTotal] = useState(0)

    function Total() {
        let conta = Number(valorPedido - valorPedido * valorCupom / 100)
        SetTotal(conta.toFixed(2))

    }

    function TeclaPressionada(e) {
        if(e.key === 'Enter')
        Total()
    }


    return (
        <div className="pagina-exe01 pagina">
            
            <Cabecalho />

            <section>

                <CabecalhoExercicio cor='#FFCE37' titulo='Exercício 01 - Cupom de desconto' enunciado='Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto.  O cupom diz quantos reais terá de desconto.'/>
                
                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Informe o valor do pedido</b></h2>
                        <input type="text" onChange={ e => SetValorPedido(e.target.value)} />

                        <h2><b>Informe o valor do cupom</b></h2>
                        <input type="text" onKeyUp={TeclaPressionada} onChange={ e => SetValorCupom(e.target.value)} />

                        <button onClick={Total}>Executar</button>

                    </div>
                </div>
                <h2 className='res'>Resultado: O total é R$ {total}</h2>
            </section>
        </div>
    );
}
