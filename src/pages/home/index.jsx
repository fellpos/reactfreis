
import Bloco from '../../components/blocos';
import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';

export default function Home() {


  return (
    <div className="pagina-home pagina">
      <Cabecalho />

      <section>
        <h1 className='titulo'> Escolha um treino...</h1>

        <div className='blocos'>

          <Link to='/exe01'>
            <Bloco cor='#FFCE37' titulo='Cupom de Desconto' subtitulo='Exercício 01' />
          </Link>

          <Link to='/exe02'>
            <Bloco cor='#B3FF37' titulo='Converter Kg/gramas' subtitulo='Exercício 02' />
          </Link>

          <Link to='/exe03'>
            <Bloco cor='#37FFF3' titulo='Valor total por quantidade' subtitulo='Exercício 03' />
          </Link>

          <Link to='/exe04'>
            <Bloco cor='#b12bf0' titulo='Tempo Leitura Livro' subtitulo='Exercício 04' />
          </Link>

          <Link to='/exe05'>
            <Bloco cor='#f02b2b' titulo='Passou ou Não?' subtitulo='Exercício 05' />
          </Link>

          <Link to='/exe06'>
            <Bloco cor='#2b3ff0' titulo='Salário Líquido' subtitulo='Exercício 06' />
          </Link>

          <Link to='/exe10'>
            <Bloco cor='#B75333' titulo='Calculo de IMC com histórico' subtitulo='Exercício 10' />
          </Link>

          <Link to='/exe11'>
            <Bloco cor='#2bf0a8' titulo='Tabuada' subtitulo='Exercício 11' />
          </Link>
    
        </div>

      </section>
    </div>
  );
}
