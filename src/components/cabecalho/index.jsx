import './index.scss'
import { Link } from 'react-router-dom';

export default function Cabecalho() {

    return (
        <div className="comp-cabecalho">
            <header className="cabecalho">

                <div className=''>

                    <Link to='/'>
                        <img className='logo' src="/assets/images/logo.jfif" alt="" />
                        <h1> React FreiS</h1>
                    </Link>
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
        </div>
    )
}