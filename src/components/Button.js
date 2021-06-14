import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) =>{

  return  <button onClick={onClick} className='btn' style={{background:color}}>{text}</button>
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'click'
}

Button.prototype = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default Button