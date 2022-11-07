import { Link } from 'react-router-dom';

import  './style.scss';

interface ILink {
  to: string;
  label?: string | number;
}

const ButtonLink = ({ to, label }: ILink) => {
  return <Link to={to}>{label}</Link>;
};

export default ButtonLink;
