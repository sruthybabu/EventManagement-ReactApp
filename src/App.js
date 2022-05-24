import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Addevents from './components/Addevents';
import Searchevent from './components/Searchevent';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/" exact element={<Addevents/>}/>
<Route path="/search" exact element={<Searchevent/>}/>
</Routes>
</BrowserRouter>


    </div>
    
  );
}

export default App;
