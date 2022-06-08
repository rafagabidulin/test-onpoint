import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import './PopUp.scss';

// eslint-disable-next-line import/no-cycle
import { Title } from '../Container/Slide3/Slide3';
import navBtn from '../../assets/svg/nav-btn.svg';

const arrList = [
  {
    num: '01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
  {
    num: '02',
    title: 'Faucibus pulvinar elementum integer enim',
  },
  {
    num: '03',
    title: 'Faucibus pulvinar elementum integer enim',
  },
  {
    num: '04',
    title: 'Mi bibendum neque egestas congue quisque egestas diam',
  },
  {
    num: '05',
    title: 'Venenatis lectus magna fringilla urna',
  },
  {
    num: '06',
    title: 'Venenatis lectus magna fringilla urna',
  },
  {
    num: '01',
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
];

// eslint-disable-next-line react/prop-types
function PopUp({ setPopUp }) {
  const [arr, setArr] = useState([]);
  const [trigger, setTrigger] = useState('prev');
  const refPopUp = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClickOutside = (event) => {
    if (refPopUp.current === event.target) {
      setPopUp(false);
    }
  };

  useEffect(() => {
    setArr(arrList.slice(0, 3));
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  function next() {
    setArr(arrList.slice(3, 6));
    setTrigger('next');
  }
  function prev() {
    setArr(arrList.slice(0, 3));
    setTrigger('prev');
  }

  return (
    <div ref={refPopUp} className="section__popUp">
      <div className="container__popUp">
        <Title title="Преимущества" />

        <div className="wrapper__list">
          {arr.map((el) => (
            <div className="wrapper__list__item" key={el}>
              <strong className="fade">{el.num}</strong>
              <p>{el.title}</p>
            </div>
          ))}
        </div>

        <div className="nav__btns">
          <img onButtonClick={prev} src={navBtn} alt="navBtn" height="30" width="30" />
          <div className={cn('nav__circle', { 'active-btn': trigger === 'prev' })} />
          <div className={cn('nav__circle', { 'active-btn': trigger === 'next' })} />
          <img onButtonClick={next} src={navBtn} alt="navBtn" height="30" width="30" />
        </div>

        <div
          onButtonClick={() => {
            setPopUp(false);
          }}
          className="popUp__close"
        >
          <p />
        </div>
      </div>
    </div>
  );
}

export default PopUp;
