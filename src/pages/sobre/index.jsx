import './index.scss';
import { Link } from 'react-router-dom';

export default function Sobre() {


    return (
        <div className="pagina-sobre pagina">
            <header className="cabecalho">

                <div className=''>

                    <img className='logo' src="/assets/images/logo.jfif" alt="" />
                    <h1> React FreiS</h1>

                </div>

                <div className='abas'>

                    <h2 className=''> Início </h2>
                    <h2 className=''> Sobre </h2>

                </div>
            </header>

            <section>
                <h1 className='titulo'> Sobre</h1>

                <div className='secao'>


                    <div className='texto'>

                        <h3>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.
                        </h3>
                        <br /><br />

                        <h3>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades.
                        </h3>
                        <h3>Estamos ansiosos para ver seu progresso e sucesso!</h3>
                    </div>

                    <img src="/assets/images/logo.jfif" alt="" />
                </div>
            </section>
        </div>
    );
}
