
import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';
import './index.scss';
import { useState } from 'react';

export default function Exe04() {

    const [nomeLivro, SetNomeLivro] = useState('');
    const [paginas, SetPaginas ] = useState(0);
    const [tempoSeg, SetTempoSeg ] = useState(0);


    function TeclaPressionada(e) {
        if(e.key === 'Enter'){

        }
    }

    return (
        <div className="pagina-exe04 pagina">

            <Cabecalho />

            <section>

            <CabecalhoExercicio cor='#B12BF0' titulo='Exercício 04 - Tempo Leitura Livro' enunciado='Implementar um programa em Javascript que <b>calcule</b> o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.'/>

                <i className="fa-solid fa-circle-arrow-left"></i>
                
                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Nome do livro</b></h2>
                        <input type="text" value={nomeLivro} onChange={ e => SetNomeLivro(e.target.value)} placeholder='Insira o nome do livro' />

                        <h2><b>Total de páginas</b></h2>
                        <input type="text" onChange={ e => SetPaginas(e.target.value)} />

                        <h2><b>Tempo em segundos de leitura por página</b></h2>
                        <input type="text" onKeyUp={TeclaPressionada} onChange={ e => SetTempoSeg(e.target.value)} />

                        <button onClick={( ) => SetTempoSeg(tempoSeg * paginas / 3600)}>Executar</button>

                    </div>
                </div>
                <h2 className='res'> Você lerá {nomeLivro} em {tempoSeg} horas</h2>
            </section>
        </div>
    );
}
