
import './App.css';
import Members from './components/Members';
import {Routes,Route} from 'react-router-dom';
import MemForm from './components/MemForm';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='members' element={ <Members/>}></Route>
        <Route path='members/:id' element={ <MemForm/>}></Route>
        <Route path='/' element={<Members/>}></Route>
        <Route path='notfound' element={<NotFound/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
