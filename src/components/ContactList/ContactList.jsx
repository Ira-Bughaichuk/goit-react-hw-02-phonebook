import React from 'react'
import PropTypes from 'prop-types'


function ContactList({contacts,onDeleteContact} ) {
    const contact = contacts.map(({ name, number,id } ) => (
        <li key={id}>
            <p>{name} : {number}</p>
            <button onClick={()=>onDeleteContact(id)} type='button'>Delate</button>
        </li>
    ))

  return (
      <ul>
          {contact}
    </ul>
  )
  }

ContactList.propTypes = {}

export default ContactList;
