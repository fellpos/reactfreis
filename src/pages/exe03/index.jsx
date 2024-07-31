
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />


export default function Exe03() {


    // function TeclaPressionada(e) {
    //     if (e.key == 'Enter')
    // }


    return (
        <div className="pagina-exe03 pagina">
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
                <h1 className='titulo'>Exercício 03 - Valor total por quantidade</h1>
                <div className='justify-center'>
                    <div className='underline-ex03'>
                        {/* Linha Coloridinha */}
                    </div>
                </div>

                <div className='justify-center'>
                    <div className='enunciado'>
                        <h3>Implementar um programa em Javascript para calcular o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande,</b> sabendo que o valor do açaí é R$ 13,50; R$ 15,00 e R$ 17,50 respectivamente</h3>
                    </div>
                </div>

                <div className='justify-center'>

                    <div className='blocos'>

                        <div className='conta-exe03'>

                            <div className='bloco'>

                                <h2><b>Quantidade pequeno</b></h2>
                                <input type="text" />

                            </div>

                            <div className='bloco'>

                                <h2><b>Quantidade médio</b></h2>
                                <input type="text" />

                            </div>

                            <div className='bloco'>

                                <h2><b>Quantidade grande</b></h2>
                                <input type="text" />

                            </div>


                        </div>
                        <button> Executar</button>  
                    </div>
                </div>
                <h2 className='res'>Resultado: 0 gramas</h2>
            </section>
        </div>
    );
}
