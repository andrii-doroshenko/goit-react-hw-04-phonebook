import PropTypes from 'prop-types';
import { useState } from 'react';
import CSS from './UserForm.module.css';

const UserForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleStateChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.log('Invalid field');
        break;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();
    onAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <form
      action=""
      autoComplete="off"
      className={CSS.userForm}
      onSubmit={handleAddUser}
    >
      <label htmlFor="formNameInput" className={CSS.userForm__label}>
        Name
      </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+([ -][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        id="formNameInput"
        className={CSS.userForm__input}
        value={name}
        onChange={handleStateChange}
      />

      <label htmlFor="formNumberInput" className={CSS.userForm__label}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        id="formNumberInput"
        className={CSS.userForm__input}
        value={number}
        onChange={handleStateChange}
      />

      <button type="submit" className={CSS.userForm__btn}>
        Add contact
      </button>
    </form>
  );
};

UserForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default UserForm;
