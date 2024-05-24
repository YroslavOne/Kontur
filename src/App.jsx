import Menu from './components/menu/Menu';
import './App.css';
import Banner from './components/banner/Banner';
import Edication from './components/education/Edication';
import Methods from './components/metods/Methods';
import Gallery from './components/gallery/Gallery';
import Map from './components/map/Map';
import Footer from './components/footer/Footer';
import { useEffect, useState } from 'react';
import MobMenu from './components/mobMenu/MobMenu';
import ListMenu from './components/mobMenu/listMenu/ListMenu';
import CallBack from './components/callBack/callBack';

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [open, setOpen] = useState(false);
  const [callBack, setCallBack] = useState(false)

  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='main-page'>
      {width > 576 ? <Menu /> : <MobMenu setOpen={setOpen} />}
      <Banner setCallBack={setCallBack} />
      <Edication />
      <Methods />
      <Gallery />
      <Map />
      <Footer />
      {open && <ListMenu setOpen={setOpen} />}
      {callBack && <CallBack setCallBack={setCallBack}/>}
    </div>
  );
}

export default App;
