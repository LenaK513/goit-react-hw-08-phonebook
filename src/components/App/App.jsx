import { ContactForm } from 'components/ContactForm/ContactForm';
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
    </Container>
  );
};
