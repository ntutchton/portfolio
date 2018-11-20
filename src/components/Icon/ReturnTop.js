import React from 'react';
import PropTypes from 'prop-types';

function ReturnTop(props) {

  return (
    <svg width={`${props.size}px`} height={`${props.size}px`} viewBox="0 0 19 17" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="return-top" transform="translate(-3.000000, -3.000000)">
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path d="M13,18 L21.17,18 L21.17,20 L3,20 L3,18 L11,18 L11,6.83 L5.41,12.41 L4,11 L12,3 L20,11 L18.58,12.42 L13,6.83 L13,18 Z" id="Combined-Shape" fill={props.color}></path>
            </g>
        </g>
    </svg>
  );
}

ReturnTop.propTypes = {
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
};

export default ReturnTop;
