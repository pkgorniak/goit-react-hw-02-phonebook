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

export default ContactListItem;
