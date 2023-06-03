import PropTypes from 'prop-types';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import CSS from './UserForm.module.css';

class UserForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  userId = nanoid(5);
  userNumberId = nanoid(5);

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleAddUser = e => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form
        action=""
        autoComplete="off"
        className={CSS.userForm}
        onSubmit={this.handleAddUser}
      >
        <label htmlFor={this.userId} className={CSS.userForm__label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([ -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={this.userId}
          className={CSS.userForm__input}
          value={this.state.name}
          onChange={this.handleNameChange}
        />

        <label htmlFor={this.userNumberId} className={CSS.userForm__label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={this.userNumberId}
          className={CSS.userForm__input}
          value={this.state.number}
          onChange={this.handleNumberChange}
        />

        <button type="submit" className={CSS.userForm__btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default UserForm;
