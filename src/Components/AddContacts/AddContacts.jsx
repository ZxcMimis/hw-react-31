import { Contacts } from "../Contacts/Contacts";
import { addContact, removeContact } from "../../redux/contacts/action";
import "./AddContacts.scss";
import { useDispatch, useSelector } from "react-redux";
import { filterContacts } from "../../redux/filter/action";

export const AddContacts = () => {
    const contacts = useSelector((state) => state.contacts)
    const dispatch = useDispatch()

    const editContacts = (e) => {
        e.preventDefault()
        const form = e.currentTarget
        const name = form.elements.name.value
        const number = form.elements.number.value

        const contact = {
            name: name,
            phone: number,
            id: Date.now(),
        };
        dispatch(addContact(contact))
        form.reset()
    }

      const deleteContact = (id) => {
        dispatch(removeContact(id))
      }

      const filterContact = (e) => {
        const keyword = e.currentTarget.value

        dispatch(filterContacts(keyword))
      }

  console.log(contacts);
  return (
    <>
      <h1 className="title">PHONEBOOK</h1>
      <form className="form" onSubmit={editContacts}>
        <p className="name">Name</p>
        <input
          name="name"
          required
          className="nameInput"
        />
        <p className="phone">Number</p>
        <input
          type="tel"
          name="number"
          required
          className="phoneInput"
        />
        <button type="submit" className="btn">
          Add Contact
        </button>
      </form>
      <input
          placeholder="Filter"
          onInput={filterContact}
          className="phoneInput"
        />
      <Contacts deleteContact={deleteContact}/>
    </>
  );
};