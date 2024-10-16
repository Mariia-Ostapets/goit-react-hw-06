import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import css from "./App.module.css";

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <div className={css.formWrapper}>
        <ContactForm />
        <SearchBox />
      </div>
      <ContactList />
    </div>
  );
}
