import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Mail from './components/mail/Mail';



//import Main from './components/Main';

function App() {
  return (
    <div className="home-page">
      <Navbar/>
      <Mail/>
      <Footer/>
    </div>
  );
}

export default App;
