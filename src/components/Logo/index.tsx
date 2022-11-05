import logo from '../../assets/logo.svg';

import './style.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
      <h1>Company checker</h1>
    </div>
  );
};

export default Logo;
