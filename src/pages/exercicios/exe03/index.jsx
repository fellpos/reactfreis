
import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio'
import { useState } from 'react';


export default function Exe03() {

    const [valorAcaiPeq, SetValorAcaiPeq] = useState(0);
    const [valorAcaiMed, SetValorAcaiMed] = useState(0);
    const [valorAcaiGran, SetValorAcaiGran] = useState(0);
    const [total, SetTotal] = useState(0);

    function conta () {
        let peq = Number(valorAcaiPeq * 13.50)
        let med = Number(valorAcaiMed * 15)
        let gran = Number(valorAcaiGran * 17.50)

        let soma = peq + med + gran

        SetTotal(soma.toFixed(2))
    }

    function TeclaPressionada(e) {
        if(e.key === 'Enter')
        conta()
    }


    return (
        <div className="pagina-exe03 pagina">
            
            <Cabecalho />

            <section>

            <CabecalhoExercicio cor='#37FFF3' titulo='Exercício 03 - Valor total por quantidade' enunciado='Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente'/>

                <div className='justify-center'>
                    <div className='blocos'>
                        <div className='conta-exe03'>

                            <div className='bloco'>
                                <h2><b>Quantidade pequeno</b></h2>
                                <input type="text" value={valorAcaiPeq} onChange={e => SetValorAcaiPeq(e.target.value)}/>
                            </div>

                            <div className='bloco'>

                                <h2><b>Quantidade médio</b></h2>
                                <input type="text" value={valorAcaiMed} onChange={e => SetValorAcaiMed(e.target.value)}/>
                            </div>

                            <div className='bloco'>

                                <h2><b>Quantidade grande</b></h2>
                                <input type="text" onKeyUp={TeclaPressionada} value={valorAcaiGran} onChange={e => SetValorAcaiGran(e.target.value)}/>
                            </div>
                        </div>
                        <button onClick={conta}> Executar</button>  
                    </div>
                </div>
                
                <h2 className='res'>Resultado: R$ {total} </h2>
            </section>
        </div>
    );
}
