import { useDispatch } from 'react-redux';

import { deleteCompany } from '@redux/companySlice';

interface IDeleteButton {
  id: string;
}

const DeleteButton = ({ id }: IDeleteButton) => {
  const dispatch = useDispatch();
  
  return (
    <button
      onClick={() => {
        dispatch(deleteCompany(id));
      }}
    ></button>
  );
};

export default DeleteButton;
