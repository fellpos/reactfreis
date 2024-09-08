
import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';
import { useState } from 'react';



export default function Exe10() {

    const [altura, SetAltura] = useState(0);
    const [peso, SetPeso] = useState(0);
    const [lista, SetLista] = useState([]);

    function Imc() {

        let imc = (peso / (altura**2)).toFixed(1);
        let sit = ''
        alert(imc)

        if (imc < 18.5) {
            sit = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            sit = 'Peso Saudável';
        } else if (imc >= 25.0 && imc <= 30.0) {
            sit = 'Sobrepeso';
        } else if (imc >= 30.1 && imc <= 39.9) {
            sit = 'Obeso';
        } else if (imc > 40) {
            sit = 'Obeso Mórbido';
        }
        alert(sit)
        
        let msg = `Altura: ${altura} | Peso: ${peso} | Situação: ${sit}`;
        SetLista(msg);
        alert(lista);
    }

    return (
        <div className="pagina-exe10 pagina">

            <Cabecalho />

            <section>


                <CabecalhoExercicio cor='#B75333' titulo='Exercício 10 - Calculo de IMC com histórico' enunciado='Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação' />


                <div className='area-1'>

                    <div className='conta-bloco-1'>

                        <div className="blocos">

                            <div className='bloco'>
                                <h2><b>Altura</b></h2>
                                <input type="text" onChange={(e) => SetAltura(e.target.value)} />
                            </div>

                            <div className='bloco'>

                                <h2><b>Peso</b></h2>
                                <input type="text" onChange={(e) => SetPeso(e.target.value)} />
                            </div>
                        </div>
                        <div className="botao">
                            <button onClick={Imc}> Executar</button>
                        </div>
                    </div>
                </div>

                <ul>
                    {lista.map((item) =>
                        <li>
                            {item}
                        </li>
                    )}
                </ul>

            </section>
        </div>
    );
}