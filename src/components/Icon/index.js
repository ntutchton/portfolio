import React from 'react';
import PropTypes from 'prop-types'
import ReturnTop from './ReturnTop'

function Icon(props) {
  switch (props.type) {
    case 'ReturnTop':
      return (<ReturnTop size={props.size} type={props.type} color={props.color}/>)
    default:
      return null
  }
}

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string || '#000',
  size: PropTypes.number.isRequired,
};

export default Icon;
