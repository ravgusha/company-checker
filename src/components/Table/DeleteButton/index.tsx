import { useDispatch } from 'react-redux';
import { deleteCompany } from '../../../redux/companySlice';

const DeleteButton = (row) => {
  const dispatch = useDispatch();
  console.log(row.row.id);

  return (
    <button
      onClick={() => {
        dispatch(deleteCompany(row.row.id));
      }}
    ></button>
  );
};

export default DeleteButton;
