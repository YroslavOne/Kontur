import Menu from './components/menu/Menu';
import './App.css';
import Banner from './components/banner/Banner';
import Edication from './components/education/Edication';
import Methods from './components/metods/Methods';
import Gallery from './components/gallery/Gallery';
import Map from './components/map/Map'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Menu />
      <Banner />
      <Edication/>
      <Methods/>
      <Gallery/>
      <Map/>
      <Footer/>
    </>
  );
}

export default App;
