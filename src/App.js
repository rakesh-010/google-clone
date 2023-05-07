import './App.css';
import Home from './pages/Home';
import {
  Route,
  Routes
} from "react-router-dom";
import SearchPage from './pages/SearchPage';
// import reducer,{initialState} from './reducer';
// import { StateProvider } from "./StateProvider";


function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path='/' element={
          <>
            {/* <StateProvider initialState={initialState} reducer={reducer}> */}
            <Home />
            {/* </StateProvider> */}
          </>
        
        }></Route>
        <Route exact path='/search' element={<SearchPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
