
import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';
import './index.scss';

import { useState } from 'react';


export default function Exe05() {

    const [nota1, SetNota1] = useState(0)
    const [nota2, SetNota2] = useState(0)
    const [nota3, SetNota3] = useState(0)
    const [passou, SetPassou] = useState(false)

    const [media, SetMedia] = useState(0)

    function Somar() {
        let n1 = Number(nota1)
        let n2 = Number(nota2)
        let n3 = Number(nota3)

        let media = (n1 + n2 + n3) / 3
        SetMedia(media)

        if (media >= 6) {
            SetPassou(true)
        } else {
            SetPassou(false)
        }
    }

    return (
        <div className="pagina-exe05 pagina">

            <Cabecalho />

            <section>

                <CabecalhoExercicio cor='#f02b2b' titulo='Exercício 05 - Passou ou Não?' enunciado='Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.' />

                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Nota 1:</b></h2>
                        <input type="text" value={nota1} onChange={e => SetNota1(e.target.value)} />

                        <h2><b>Nota 2:</b></h2>
                        <input type="text" value={nota2} onChange={e => SetNota2(e.target.value)} />

                        <h2><b>Nota 3:</b></h2>
                        <input type="text" value={nota3} onChange={e => SetNota3(e.target.value)} />

                        <button onClick={Somar} > Executar </button>

                    </div>
                </div>
                <h2 className='res'> A média do aluno é {media}</h2>
                <h2 className='res'> O aluno passou? {passou ? 'sim' : 'não'} </h2>
            </section>
        </div>
    );
}
