import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Cadastro from './Pages/cadastro.jsx'
import Lista from './Pages/lista.jsx'
import Alterar from './Pages/alterar.jsx'
import Sidebar from './Pages/header.jsx'
import Login from "./Pages/login.jsx";

export default function Rotas() {

    return (
        <BrowserRouter>
            <Sidebar/>
            <Routes>
                <Route path='/' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Lista /> : <Login/> } />
                <Route path='/cadastro' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Cadastro /> : <Login/> } />
                <Route path='/lista' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Lista /> : <Login/> } />
                <Route path='/alterar' element={ sessionStorage.getItem('logado') === '1' || localStorage.getItem('logado') === '1' ? <Alterar /> : <Login/> } />
            </Routes>
        </BrowserRouter>
    )
}
