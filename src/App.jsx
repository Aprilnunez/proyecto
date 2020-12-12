import './App.scss'; 
import logo from './logo.svg';
import './App.scss';
import Hero from './components/Home/Hero';
import Footer from './components/global/Footer';
import imagenBox from './assets/flowerbox.jpg';

function App() {
  return (
    <>  
      <Hero />
      <img src={imagenBox} alt="Flower Box" />
      <Footer />
    </>
  )
}
export default App;

