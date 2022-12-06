import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { nanoid } from '@reduxjs/toolkit';
import { Btn } from 'components/Button/Button';
import { getContacts } from 'redux/selectors';
import { fetchContacts, addContact } from 'redux/operations';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getLoading, getError } from 'redux/selectors';
import { FormStyle, Input } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements['name'].value;

    const phone = Number(form.elements['number'].value);

    // const normalizedName = name.toLowerCase();

    // const compareNames = contacts?.find(
    //   contactToCompare =>
    //     contactToCompare.name?.toLowerCase() === normalizedName
    // );

    // if (compareNames) {
    //   alert(`${name} is already in the list of contacts`);
    //   return;
    // }

    dispatch(addContact({ name, phone }));
    form.reset();
  };

  return (
    <div>
      <FormStyle onSubmit={handleSubmit}>
        <label htmlFor="1"> Name</label>

        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="1"
        />
        <label htmlFor="2"> Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="2"
        />
        <Btn type="submit">Add contact </Btn>

        {isLoading && !error && <b>Request in progress...</b>}
      </FormStyle>

      {(contacts.length > 0 && <ContactList />) ||
        'There is any contact in the list'}

      {contacts.length > 0 && <Filter />}
    </div>
  );
}
