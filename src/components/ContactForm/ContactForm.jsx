import { useSelector, useDispatch } from 'react-redux';
import { Btn } from 'components/Button/Button';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { addContact } from 'redux/contactsSlice';
import { FormStyle, Input } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  // console.log(contacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    // console.log(form.elements['name'].value);
    // console.log(form.elements['number'].value);
    dispatch(
      addContact(
        form.elements['name'].value,
        Number(form.elements['number'].value)
      )
    );
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
      </FormStyle>
      {(contacts.length > 0 && <ContactList />) ||
        'There is any contacts in list'}
      {contacts.length > 0 && <Filter />}
    </div>
  );
}
