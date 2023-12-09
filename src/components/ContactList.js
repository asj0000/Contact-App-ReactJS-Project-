import React from 'react'
import CardContact from './ContactCard'


const ContactList = (props)=>{
   
  console.log(props.contact)

  const deleteContactHandler = (id)=>{
    props.getContactId(id)
  }

  const renderContactList = props.contacts.map((contact)=>{
    return(
      <CardContact contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
    )
  })

   return(
    <div className='ui celled list'>
      {renderContactList}
    </div>
   )



}

export default ContactList