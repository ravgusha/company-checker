interface IButton {
  onClick?: React.MouseEventHandler;
  label: string;
}

const Button: React.FC<IButton> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;
