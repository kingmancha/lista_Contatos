import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import { addContact, editContact } from '../../redux/contactsSlice'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

function ContactForm({ existingContact = null, onSave }) {
  const dispatch = useDispatch()
  const [contact, setContact] = useState(
    existingContact || { id: null, name: '', email: '', phone: '' }
  )

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (contact.id) {
      dispatch(editContact(contact))
    } else {
      dispatch(addContact({ ...contact, id: Date.now() }))
    }
    onSave()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={contact.name}
        placeholder="Nome completo"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={contact.email}
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phone"
        value={contact.phone}
        placeholder="Telefone"
        onChange={handleChange}
        required
      />
      <button type="submit">Salvar</button>
    </FormContainer>
  )
}

ContactForm.propTypes = {
  existingContact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
}

ContactForm.defaultProps = {
  existingContact: null,
}

export default ContactForm
