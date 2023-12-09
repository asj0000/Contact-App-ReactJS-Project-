import './App.css';
import React, { useState ,useEffect } from "react"
import {v4 as uuid} from 'uuid'
import Header from "./Header"
import AddContact from "./AddContact"
import ContactList from "./ContactList"

 
function App() {
  
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts , setContacts] = useState([]);

  // const contacts  = [
  //   {
  //     id: "1",
  //     name: "Dipesh",
  //     email: "nicks@gmail.com"
  //   },
  //   {
  //     id: "2",
  //     name: "Mitesh",
  //     email: "mitss@gmail.com"
  //   }
  // ]

  const addContactHandler = (contact)=>{
    console.log(contact);
    setContacts([...contacts , {id : uuid() , ...contact}])  //adding new data with the previous one
  }

  const removeContactHandler = (id)=>{
    const newContactlist = contacts.filter((contact)=>{
      return contact.id !== id;
    })
    setContacts(newContactlist)
  }

  useEffect(()=>{
      localStorage.setItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts));
  },[contacts]);

  useEffect(()=>{
    const retrieveContacts=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY , JSON.stringify(contacts)));
      
    if(retrieveContacts)
       setContacts(retrieveContacts)
  },[]);


  return (
   <div className='ui container'>
    <Header/>
    <AddContact addContactHandler={addContactHandler}/>
    <ContactList contacts={ contacts} getContactId={removeContactHandler}/>
   </div>
  );
}

export default App;
