import './App.css';
import Home from './pages/Home';
import {
  Route,
  Routes
} from "react-router-dom";
import SearchPage from './pages/SearchPage';



function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
              <Home />

        
        }></Route>
        <Route exact path='/search' element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
