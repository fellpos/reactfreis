import './index.scss';

export default function Bloco(props) {
    return (
        <div className="comp-bloco">
            <div className='bloco'>
                <div className='cor' style={{ backgroundColor: props.cor }}></div>
                <h2>{props.titulo}</h2>
                <h3>{props.subtitulo}</h3>
            </div>
        </div>
    )
}