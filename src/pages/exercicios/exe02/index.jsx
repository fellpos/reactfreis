
import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio'
import './index.scss';

import { useState } from 'react';


export default function Exe02() {

    const [valorKilo, SetValorKilo] = useState(0)
    const [total, SetTotal] = useState(0)

    function Converter() {
        let conta = Number(valorKilo * 1000)
        SetTotal(conta.toFixed(2))
    }

    function TeclaPressionada(e) {
        if(e.key === 'Enter')
        Converter()
    }


    return (
        <div className="pagina-exe02 pagina">
            
            <Cabecalho />

            <section>

            <CabecalhoExercicio cor='#B3FF37' titulo='Exercício 02 - Converter Kg/gramas' enunciado='Implementar um programa em Javascript para <b>converter kilos em gramas. </b>'/>

                
                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Valor em KG</b></h2>
                        <input type="text" value={valorKilo} onKeyUp={TeclaPressionada} onChange={ e => SetValorKilo(e.target.value)}/>

                        <button onClick={Converter}>Executar</button>

                    </div>
                </div>
                <h2 className='res'>Resultado: {total} gramas</h2>
            </section>
        </div>
    );
}
