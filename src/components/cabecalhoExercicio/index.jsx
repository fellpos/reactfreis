import { Link } from 'react-router-dom'
import './index.scss'

export default function CabecalhoExercicio(props) {

    return (
        <div className="comp-cabecalho-Exercicios">


            <h1 className='titulo' >
                <Link to='/'>
                    <i className="fa-solid fa-circle-arrow-left setinha"></i>
                </Link>
                {props.titulo}
            </h1>

            <div className='justify-center'>
                <div className='underline' style={{ backgroundColor: props.cor }}>
                    {/* Linha Coloridinha */}
                </div>
            </div>

            <div className='justify-center'>
                <div className='enunciado'>
                    <h3>{props.enunciado}</h3>
                </div>
            </div>
        </div>
    )
}