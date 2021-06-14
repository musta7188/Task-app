import {useState} from 'react'
import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title,setFormState, showForm}) =>{


  const onClick = () =>{
    setFormState()
  }

  return (
    <header className='header'>
      <h1 >{title}</h1>
      <Button color={showForm?'red':'green'} text={showForm?'Close': 'Add'} onClick={onClick}/>

    </header>
  )
}


Header.defaultProps = {
  title: "task app"
}

Header.prototype = {
  title: PropTypes.string
}

export default Header