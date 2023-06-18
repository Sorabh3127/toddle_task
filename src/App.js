// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Bottom from './components/Bottom.jsx';
// import { Routes, Route} from 'react-router-dom';
// import Now from "./Now"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bottom/>

      {/* <Routes>
        <Route path="/now" element={<Now/>}></Route>
      </Routes> */}
    </div>
  );
}

export default App;
