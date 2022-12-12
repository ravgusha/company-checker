import { useNavigate } from 'react-router-dom';

import logo from '@assets/logo.svg';

import './style.scss';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <div
      className="logo"
      onClick={() => {
        navigate('/');
      }}
    >
      <img src={logo} alt="logo" />
      <h1>Company checker</h1>
    </div>
  );
};

export default Logo;
