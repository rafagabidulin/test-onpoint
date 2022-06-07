import { Link } from 'react-router-dom';
import Button from '../../Button';
import './Slide1.scss';
import img1 from '../../../assets/images/slide1/img1.png';
import img2 from '../../../assets/images/slide1/img2.png';
import img3 from '../../../assets/images/slide1/img3.png';
import img4 from '../../../assets/images/slide1/img4.png';
import img5 from '../../../assets/images/slide1/img5.png';
import img6 from '../../../assets/images/slide1/img6.png';
import img7 from '../../../assets/images/slide1/img7.png';
import img8 from '../../../assets/images/slide1/img8.png';

function Slide1() {
  return (
    <section className="container slide1">
      <div className="content-item">
        <h2>Привет,</h2>
        <h1>
          это
          <span> не</span>
          <br />
          коммерческое задание
          <Link to="/slide2">
            <Button title="Что дальше?" />
          </Link>
        </h1>
      </div>
      <img className="img img1" src={img1} alt="" />
      <img className="img img2 img2_anim" src={img2} alt="" />
      <img className="img img3 img3_anim" src={img3} alt="" />
      <img className="img img4 img4_anim" src={img4} alt="" />
      <img className="img img5 img5_anim" src={img5} alt="" />
      <img className="img img6" src={img6} alt="" />
      <img className="img img7" src={img7} alt="" />
      <img className="img img7_" src={img7} alt="" />
      <img className="img img8" src={img8} alt="" />
    </section>
  );
}

export default Slide1;
