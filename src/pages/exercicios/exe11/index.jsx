
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />




export default function Exe11() {

    const [num, SetNum] = useState(0)
    const [tabuada, SetTabuada] = useState([])


    function mapear() {

        let resultados = []

        for (let i = 0; i < 10; i++) {
            let temp = `${num} x ${i + 1}= ${num * i + 1}`

            resultados[i] = temp

        }

        SetTabuada(resultados)

        alert(0.1 + 0.2)
    }

    return (
        <div className="pagina-exe11 pagina">
            <header className="cabecalho">

                <div className=''>

                    <img className='logo' src="/assets/images/logo.jfif" alt="" />
                    <h1>React FreiS</h1>

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
                <h1 className='titulo'>Exercício 11 - Tabuada</h1>

                <div className='justify-center'>
                    <div className='underline-exe11'>
                        {/* Linha Coloridinha */}
                    </div>
                </div>

                <div className='justify-center'>
                    <div className='enunciado'>
                        <h3>Implemente um programa em Javascript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato ”A x B = X”.</h3>
                    </div>
                </div>

                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Tabuada do:</b></h2>
                        <input type="text" value={num} onChange={e => SetNum(e.target.value)} />

                        <button onClick={mapear} > Executar </button>

                    </div>
                </div>
                    <h2 className='res'> A média do aluno é</h2>
                    <ul>
                        {tabuada.map(Resultado => <li> {Resultado} </li>)}
                    </ul>



            </section>
        </div>
    );
}
