
import './index.scss';

import Cabecalho from '../../../components/cabecalho';
import CabecalhoExercicio from '../../../components/cabecalhoExercicio';



export default function Exe06() {


    return (
        <div className="pagina-exe06 pagina">

            <Cabecalho />

            <section>

                <CabecalhoExercicio cor='#2b3ff0' titulo='Exercício 06 - Salário Líquido' enunciado='Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.' />


                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Salário base</b></h2>
                        <input type="text" />

                        <h2><b>Bônus mensal em porcentagem</b></h2>
                        <input type="text" />

                        <h2><b>Total de descontos</b></h2>
                        <input type="text" />

                        <button> Executar </button>

                    </div>
                </div>
                <h2 className='res'>Seu salário líquido é de R$ "800,00"</h2>
            </section>
        </div>
    );
}
