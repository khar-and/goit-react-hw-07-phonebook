import { useDispatch } from 'react-redux';
import { setFilterContacts } from '../../redux/filterSlice';
import { Input, Label } from './Filter.styled';

export function Filter() {
  const dispatch = useDispatch();

  const handlerFilter = evt => {
    dispatch(setFilterContacts(evt.target.value));
  };

  return (
    <Label>
      Find contact by the name
      <Input type="text" name="filter" onChange={handlerFilter} />
    </Label>
  );
}
