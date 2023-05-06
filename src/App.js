import './App.css';
import Home from './pages/Home';
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/search' element={<h1>This is the Search page</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
