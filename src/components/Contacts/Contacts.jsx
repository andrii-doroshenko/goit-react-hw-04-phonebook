import CSS from './Contacts.module.css';
import { ImCross, ImPhone } from 'react-icons/im';
import PropTypes from 'prop-types';

const Contacts = ({ filteredContacts, onDeleteContact }) => {
  return (
    <>
      <ul className={CSS.contacts}>
        {filteredContacts.map(({ name, id, number }) => {
          return (
            <li className={CSS.contacts__item} key={name} id={id}>
              <p>name: {name}</p>
              <p className={CSS.user__number}>
                <ImPhone className={CSS.iconMoon} />
                {number}
                <ImCross
                  type="button"
                  className={CSS.contacts__btn}
                  onClick={() => onDeleteContact(id)}
                ></ImCross>
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Contacts.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
