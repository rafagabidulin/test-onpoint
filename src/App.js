import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Slide1 from './components/Container/Slide1/Slide1';
import Slide2 from './components/Container/Slide2/Slide2';
import Slide3 from './components/Container/Slide3/Slide3';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Routes>
          <Route path="/test-onpoint/" element={<Slide1 />} />
          <Route path="/slide2" element={<Slide2 />} />
          <Route path="/slide3" element={<Slide3 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
