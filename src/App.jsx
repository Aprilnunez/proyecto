import './App.scss'; 
import logo from './logo.svg';
import './App.scss';
import Hero from './components/Home/Hero';
import Footer from './components/global/Footer';
import imagenBox from './assets/flowerbox.jpg';
import Nav from './components/global/Nav/Nav';

function App() {
  return (
    <>  
      <Nav />
      <Hero />
      <img src={imagenBox} alt="Flower Box" />
      <Footer />
    </>
  )
}
export default App;

