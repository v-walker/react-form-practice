import React, {useState, useEffect} from 'react';

function AddressBook() {
    const [contacts, setContacts] = useState([]);
    const [nameInput, setNameInput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [phoneInput, setPhoneInput] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContactsList = [...contacts]

        let formObj = {
            name: nameInput,
            email: emailInput,
            phone: phoneInput
        }

        newContactsList.push(formObj);
        setContacts(newContactsList);

        setNameInput("");
        setEmailInput("");
        setPhoneInput("");

    }
    
    useEffect(() => {
        console.log(contacts);
    }, [contacts])

    return (
        <div>
            <h1>Address Book</h1>
            <br />
            <br />

            <div className="container row">
                <div className="col-10 row">
                    <div className="col-4">
                        <form onSubmit={handleSubmit}>
                            <h2>Add a new Contact</h2>
                            <label htmlFor="name">Name:</label> <br />
                            <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} /> <br />
                            <label htmlFor="email">Email:</label><br />
                            <input type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} /> <br />
                            <label htmlFor="phone">Phone:</label><br />
                            <input type="text" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} /> <br />
                            <input type="submit" />
                        </form>
                    </div> 

                    <div className="col-6 offset-2">
                        <h2>Contacts</h2>
                        <ul>
                        {contacts.map((contact, index) => {
                            return (
                                <li key={index}>
                                    <h3>{contact.name}</h3>
                                    <p>{contact.email}</p>
                                    <p>{contact.phone}</p>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default AddressBook;
