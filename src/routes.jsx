import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home';
import Sobre from './pages/sobre';

import Exe01 from './pages/exercicios/exe01';
import Exe02 from './pages/exercicios/exe02';
import Exe03 from './pages/exercicios/exe03';
import Exe04 from './pages/exercicios/exe04';
import Exe05 from './pages/exercicios/exe05';
import Exe06 from './pages/exercicios/exe06';

export default function Navegacao() {

    return (

        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />

                <Route path='/exe01' element={<Exe01 />} />
                <Route path='/exe02' element={<Exe02 />} />
                <Route path='/exe03' element={<Exe03 />} />
                <Route path='/exe04' element={<Exe04 />} />
                <Route path='/exe05' element={<Exe05 />} />
                <Route path='/exe06' element={<Exe06 />} />

            </Routes>
        </BrowserRouter>

    )
}