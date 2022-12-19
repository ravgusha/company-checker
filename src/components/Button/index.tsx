import './style.scss';

interface IButton {
  onClick?: React.MouseEventHandler;
  label: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<IButton> = ({ onClick, label, type, disabled, className }) => {
  return (
    <button type={type} disabled={disabled} className={`btn ${className}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
