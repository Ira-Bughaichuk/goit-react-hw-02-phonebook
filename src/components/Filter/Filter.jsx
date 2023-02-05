import PropTypes from 'prop-types'
import React, { Component } from 'react'

const Filter = ({handleChange}) => {

  
    return (
        <>
         <label> Find contacts by name  </label>  
            <input name='filter' onChange={handleChange} placeholder="Filter contacts" />
        </>
          
    )
  
}
export default Filter;