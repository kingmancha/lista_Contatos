import React from 'react'
import { useDispatch } from 'react-redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { removeContact } from '../../redux/contactsSlice'

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
`

function ContactItem({ contact, onEdit }) {
  const dispatch = useDispatch()

  return (
    <ItemContainer>
      <div>
        <p>
          <strong>Nome:</strong> {contact.name}
        </p>
        <p>
          <strong>Email:</strong> {contact.email}
        </p>
        <p>
          <strong>Telefone:</strong> {contact.phone}
        </p>
      </div>
      <div>
        <button type="button" onClick={() => onEdit(contact)}>
          Editar
        </button>
        <button
          type="button"
          onClick={() => dispatch(removeContact(contact.id))}
        >
          Remover
        </button>
      </div>
    </ItemContainer>
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default ContactItem
