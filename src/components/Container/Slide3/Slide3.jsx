import { useState } from 'react';
import './Slide3.scss';

import Button from '../../Button';
import PopUp from '../../PopUp';
import bottle from '../../../assets/images/slide3/bottle.png';
import slide3Icon2 from '../../../assets/images/slide3/slide3-icon2.png';
import slide3Icon1 from '../../../assets/images/slide3/slide3-icon1.png';
import bubble1 from '../../../assets/images/slide3/bubble1.png';
import bubble2 from '../../../assets/images/slide3/bubble2.png';
import bubble3 from '../../../assets/images/slide3/bubble3.png';
import bg from '../../../assets/images/bg.jpg';

function Slide3() {
  const [popUp, setPopUp] = useState(false);
  return (
    <section className="container slide3">
      <img className="slide3__fon" src={bg} alt="" />
      <img className="slide3__bottle" src={bottle} alt="" width={230} />
      <img className="slide3__bubble1 bubble__anim1" src={bubble1} alt="" />
      <img className="slide3__bubble2 bubble__anim2" src={bubble2} alt="" />
      <img className="slide3__bubble3 bubble__anim3" src={bubble3} alt="" />
      <img className="slide3__bubble4" src={bubble3} alt="" />
      <img className="slide3__bubble5 bubble__anim5" src={bubble3} alt="" />

      {!popUp && (
        <>
          <Title title="Ключевое сообщения" />
          <div className="slide3__block">
            <div className="slide3__block_item slide3__block_item1">
              <img src={slide3Icon2} alt="" />
              <p>
                Ehicula ipsum a arce cursus vitae.
                Eu non diam phasellus vestibulum lorem
                sed ricus ultricies
              </p>
            </div>
            <div className="slide3__block_item slide3__block_item2">
              <img src={slide3Icon1} alt="" />
              <p>A arcu cursus vitae</p>
            </div>
            <Button className="wrapper__btn" title="Подробнее" click={() => setPopUp(true)} />
          </div>
        </>
      )}
      {popUp && <PopUp setPopUp={setPopUp} />}
    </section>
  );
}

// eslint-disable-next-line react/prop-types
export function Title({ title }) {
  return (
    <div className="slide3__title">
      <p>{title}</p>
      <h1>
        Brend
        <strong>xy</strong>
      </h1>
    </div>
  );
}

export default Slide3;
