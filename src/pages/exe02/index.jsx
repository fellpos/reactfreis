
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />


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
                <h1 className='titulo'>Exercício 02 - Converter Kg/gramas</h1>
                <div className='justify-center'>
                    <div className='underline-ex02'>
                        {/* Linha Coloridinha */}
                    </div>
                </div>

                <div className='justify-center'>
                    <div className='enunciado'>
                        <h3>Implementar um programa em Javascript para <b>converter kilos em gramas. </b></h3>
                    </div>
                </div>
                
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
