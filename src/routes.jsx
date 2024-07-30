
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from './pages/sobre';

export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
            </Routes>
        </BrowserRouter>

    )
}