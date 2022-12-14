import React from 'react'

import PropTypes from 'prop-types'

import './primary-blue-button.css'

const PrimaryBlueButton = (props) => {
  return (
    <div className={`primary-blue-button-container ${props.rootClassName} `}>
      <button className="primary-blue-button-button button buttonSmall">
        {props.button}
      </button>
    </div>
  )
}

PrimaryBlueButton.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

PrimaryBlueButton.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default PrimaryBlueButton
