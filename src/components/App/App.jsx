import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";
import initialContacts from "../../contacts.json";
import { useState, useEffect } from "react";

export default function App() {
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem("contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  // });
  // const [filter, setFilter] = useState("");

  // const addContact = (newContact) => {
  //   setContacts((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };

  // const deleteContact = (contactId) => {
  //   setContacts((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== contactId);
  //   });
  // };

  // const visibleContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  return (
    // <div className="css.container">
    //   <h1>Phonebook</h1>
    //   <ContactForm onAdd={addContact} />
    //   <SearchBox value={filter} onFilter={setFilter} />
    //   <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    // </div>
    <div className="css.container">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
