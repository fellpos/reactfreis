
import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="pagina-home pagina">
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
        <h1> Escolha um treino...</h1>

      </section>
    </div>
  );
}
