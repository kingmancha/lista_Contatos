import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ContactItem from '../ContactItem'
import ContactForm from '../ContactForm'

function ContactList() {
  const contacts = useSelector((state) => state.contacts)
  const [editingContact, setEditingContact] = useState(null)

  const handleSave = () => {
    setEditingContact(null)
  }

  return (
    <div>
      {editingContact ? (
        <ContactForm existingContact={editingContact} onSave={handleSave} />
      ) : (
        <ContactForm onSave={handleSave} />
      )}
      <h2>Lista de Contatos</h2>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onEdit={(selectedContact) => setEditingContact(selectedContact)}
        />
      ))}
    </div>
  )
}

export default ContactList
