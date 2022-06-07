import Plus from '../../assets/svg/Plus';
import Right from '../../assets/svg/Right-btn';
import './Button.scss';

// eslint-disable-next-line react/prop-types
function Button({ title, click }) {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div role="button" tabIndex={0} onClick={click} className="wrapper__btn">
      <div>{title !== 'Подробнее' ? <Right /> : <Plus />}</div>
      {title}
    </div>
  );
}

export default Button;
