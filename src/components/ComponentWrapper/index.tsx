import { ReactElement, ReactNode } from 'react';
import './style.scss';

interface IWrapper {
  children: ReactNode | ReactElement;
}

const ComponentWrapper = ({  children }: IWrapper) => {
  return <main>{children}</main>;
};

export default ComponentWrapper;
