import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import UserForm from './UserForm/UserForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

const getElId = () => nanoid(5);

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  const handleAddContact = (name, number) => {
    const id = getElId();
    const newContact = { id, name, number };

    // Проверяем, есть ли уже контакт с таким именем
    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = e => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = id => {
    const confirmDelete = window.confirm(
      'Ви впевнені, що хочете видалити цей контакт?'
    );

    if (confirmDelete) {
      setContacts(prevContacts =>
        prevContacts.filter(contact => contact.id !== id)
      );
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <UserForm onAddContact={handleAddContact}></UserForm>

        <h2>Contacts</h2>
        <Filter value={filter} onFilterChange={handleFilterChange}></Filter>

        {contacts.length ? (
          <Contacts
            filteredContacts={filteredContacts}
            onDeleteContact={handleDeleteContact}
          ></Contacts>
        ) : null}
      </Section>
    </>
  );
};

export default App;
