
import './index.scss';

import { useState } from 'react';
import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';

export default function Exe11() {

    const [num, SetNum] = useState(0)
    const [tabuada, SetTabuada] = useState([])


    function mapear() {

        let resultados = []

        for (let i = 0; i < 10; i++) {
            let temp = `${num} x ${i + 1}= ${num * i + 1}`;

            resultados[i] = temp;
        }
        SetTabuada(resultados);
    }

    return (
        <div className="pagina-exe11 pagina">

            <Cabecalho />

            <section>

                <CabecalhoExercicio cor='#2bf0a8' titulo='Exercício 11 - Tabuada' enunciado='Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.' />

                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Tabuada do:</b></h2>
                        <input type="text" placeholder='Ex: 2' onChange={e => SetNum(e.target.value)} />

                        <button onClick={mapear} > Executar </button>

                    </div>
                </div>
                <div className="secao">
                    <h2 className='res'>A tabuada de {num} é: </h2>
                    <ul>
                        {tabuada.map(Resultado => <li> {Resultado} </li>)}
                    </ul>
                </div>

            </section>
        </div>
    );
}
