
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

          <Link to='/'>
            <h2 className=''> Início </h2>
          </Link>

          <Link to='/sobre'>
            <h2 className=''> Sobre </h2>
          </Link>

        </div>
      </header>

      <section>
        <h1 className='titulo'> Escolha um treino...</h1>

        <div className='blocos'>

          <Link to='/exe01'>
            <div className='bloco'>
              <div className='cor-amarela'>

              </div>

              <h2>Cupom de desconto</h2>

              <h3>Exercício 01</h3>
            </div>
          </Link>

          <Link to='/exe02'>
            <div className='bloco'>
              <div className='cor-verde'>

              </div>

              <h2>Converter Kg/gramas</h2>

              <h3>Exercício 02</h3>
            </div>
          </Link>

          <Link to='/exe03'>
            <div className='bloco'>
              <div className='cor-azul'>

              </div>

              <h2>Valor total por quantidade</h2>

              <h3>Exercício 03</h3>
            </div>
          </Link>

          <Link to='/exe04'>
            <div className='bloco'>
              <div className='cor-roxo'>

              </div>

              <h2>Tempo Leitura Livro</h2>

              <h3>Exercício 04</h3>
            </div>
          </Link>

          <Link to='/exe05'>
            <div className='bloco'>
              <div className='cor-vermelho'>

              </div>

              <h2>Passou ou Não?</h2>

              <h3>Exercício 05</h3>
            </div>
          </Link>

        </div>

{/* Linha 2 --------------------------> */}

        <div className='blocos'>

          <Link to='/exe06'>
            <div className='bloco'>
              <div className='cor-azul-escuro'>

              </div>

              <h2>Salário Líquido</h2>

              <h3>Exercício 06</h3>
            </div>
          </Link>

        </div>


      </section>
    </div>
  );
}
