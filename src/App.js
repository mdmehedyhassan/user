import './App.css';
import Footer from './component/Footer/Footer';
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="main-app">
     <Navbar></Navbar>
     <Home></Home>
     <Footer></Footer>
    </div>
  );
}

export default App;
