import './App.css';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="main-app container">
     <Navbar></Navbar>
     <Home></Home>
    </div>
  );
}

export default App;
