import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';

import { selectContacts, selectContactsFilter } from '../../redux/selectors';
import { Button, Item, List } from './ContactList.styled';

// компонент використовую список контактів з стору через useSelector
export function ContactList() {
  const contacts = useSelector(selectContacts);

  const filterValue = useSelector(selectContactsFilter).toLowerCase();

  // надсилання екшона видалення контакту за допомогою useDispatch
  const dispatch = useDispatch();

  const handleDelete = evt => {
    dispatch(deleteContact(evt.currentTarget.id));

    // ^ сповіщення має відображатись у featch??
    alert(`This contact is delited from your phonebook!`);
  };

  const getVisibilityContacts = () => {
    if (!filterValue || filterValue === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  const visibilityContacts = getVisibilityContacts();

  return (
    <List>
      {visibilityContacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name}: <span>{contact.phone}</span>
          </p>
          <Button type="button" id={contact.id} onClick={handleDelete}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
