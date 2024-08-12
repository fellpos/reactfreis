
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />


export default function Exe06( ) {

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
        SetMedia( media )

        if(media >= 6) {
            SetPassou(true)
        } else {
            SetPassou(false)
        }
    }

    return (
        <div className="pagina-exe06 pagina">
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
                <h1 className='titulo'>Exercício 06 - Salário Líquido</h1>
                
                <div className='justify-center'>
                    <div className='underline-exe06'>
                        {/* Linha Coloridinha */}
                    </div>
                </div>

                <div className='justify-center'>
                    <div className='enunciado'>
                        <h3>Implementar um programa em Javascript para <b>verificar</b> se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</h3>
                    </div>
                </div>
                
                <div className='justify-center'>

                    <div className='conta'>
                        <h2><b>Nota 1:</b></h2>
                        <input type="text" value={nota1} onChange={ e => SetNota1(e.target.value)}  />

                        <h2><b>Nota 2:</b></h2>
                        <input type="text" value={nota2} onChange={ e => SetNota2(e.target.value)}  />

                        <h2><b>Nota 3:</b></h2>
                        <input type="text" value={nota3} onChange={ e => SetNota3(e.target.value)}  />

                        <button onClick={Somar} > Executar </button>

                    </div>
                </div>
                <h2 className='res'> A média do aluno é {media}</h2>
                <h2 className='res'> O aluno passou? {passou ? 'sim' : 'não'} </h2>
            </section>
        </div>
    );
}
