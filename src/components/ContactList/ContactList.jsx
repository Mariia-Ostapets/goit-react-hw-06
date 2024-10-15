import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
// import { Contacts } from "../../redux/contactsSlice";

const getVisibleContacts = (contacts, searchFilter) => {
  if (!searchFilter) {
    return contacts;
  }
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchFilter.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const searchFilter = useSelector((state) => state.filters.name);
  const visibleContacts = getVisibleContacts(contacts, searchFilter);

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}
