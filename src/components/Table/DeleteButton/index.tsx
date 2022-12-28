import { useDispatch } from 'react-redux';

import { deleteCompany } from '@redux/companySlice';

interface IDeleteButton {
  id: string;
  label?: string;
  disabled?: boolean;
}

const DeleteButton = ({ id, label, disabled }: IDeleteButton) => {
  const dispatch = useDispatch();

  return (
    <button
      disabled={disabled}
      className="delete-btn"
      onClick={() => {
        dispatch(deleteCompany(id));
      }}
    >
      {label}
    </button>
  );
};

export default DeleteButton;
