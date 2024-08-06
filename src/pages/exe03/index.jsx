
import './index.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';
<link rel="stylesheet" href="fontawesome" />


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
