import { useState } from 'react';
import { Button, Form, Input, Label } from './ContactForm.styled';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const handleChangeInput = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    // Проверяет, существует ли контакт с таким же именем в списке контактов. Если контакт уже существует, выводится предупреждение.
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    // Вызов функции onSubmit из родительского компонента с передачей объекта контакта.
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');

    // onSubmit({ name, number });
    // setName('');
    // setNumber('');
  };

  return (
    <Form onSubmit={handleSubmitForm}>
      <Label>
        Name{' '}
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          required
          onChange={handleChangeInput}
        />
      </Label>
      <Label>
        Number{' '}
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={handleChangeInput}
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;
