import { useSelector, useDispatch } from 'react-redux';
import { Btn } from 'components/Button/Button';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import { FormStyle, Input } from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const formName = form.elements['name'].value;
    console.log(formName);
    const formNumber = form.elements['number'].value;

    const normalizedName = formName.toLowerCase();
    console.log(normalizedName);
    const compareNames = contacts.find(
      contactToCompare => contactToCompare.name.toLowerCase() === normalizedName
    );

    if (compareNames) {
      alert(`${formName} is already in the list of contacts`);
      return;
    }

    dispatch(addContact(formName, Number(formNumber)));
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
        'There is any contact in the list'}
      {contacts.length > 0 && <Filter />}
    </div>
  );
}
