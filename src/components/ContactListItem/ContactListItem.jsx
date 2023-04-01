import PropTypes from 'prop-types';

const ContactListItem = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => onDeleteContact(contact.id)}>
        Delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  contact: PropTypes.object,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;
