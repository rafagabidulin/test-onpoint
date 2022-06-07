import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/Logo';
import './Header.scss';

// eslint-disable-next-line react/prop-types
function Header() {
  return (
    <header className="header">
      <Link to="/">
        <Logo />
      </Link>
      <hr />
      <h2>PROJECT</h2>
    </header>
  );
}

export default Header;
