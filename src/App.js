
import './App.css';
import Home from './routes/Home';
import MaisCaro from './routes/MaisCaro';
import { Route,Routes } from 'react-router-dom';
import MaisBarato from './routes/MaisBarato';
import Visitados from './routes/Visitados';
import Fale from './routes/Fale';
import Sobre from './routes/Sobre';
import Verao2 from './routes/Verao2';
import Outono2 from './routes/Outono2';
import Primavera2 from './routes/Primavera2';
import Inverno2 from './routes/Inverno2';


function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/caro' element={<MaisCaro />} />
    <Route path='/barato' element={<MaisBarato />} />
    <Route path='/maisvisitados' element={<Visitados />} />
    <Route path='/fale' element={<Fale/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/verao' element={<Verao2/>}/>
    <Route path='/outono' element={<Outono2/>}/>
    <Route path='/primavera' element={<Primavera2/>}/>
    <Route path='/inverno' element={<Inverno2/>}/>

 
   </Routes>
   
   </>
  );
}

export default App;
