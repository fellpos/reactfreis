
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/sobre';
import Exe01 from './pages/exe01';
import Exe02 from './pages/exe02';
import Exe03 from './pages/exe03';

export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/exe01' element={<Exe01 />} />
                <Route path='/exe02' element={<Exe02 />} />
                <Route path='/exe03' element={<Exe03 />} />
            </Routes>
        </BrowserRouter>

    )
}