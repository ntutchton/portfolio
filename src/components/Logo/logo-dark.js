import React from 'react';
import PropTypes from 'prop-types';

function LogoDark(props) {

  return (
    <svg  height={props.size + 'px'} viewBox="0 0 70 142" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="logo" transform="translate(-314.000000, -401.000000)" fillRule="nonzero" stroke="#424242" strokeWidth="9.2">
                <g transform="translate(319.000000, 406.000000)">
                    <path d="M30.0993377,131.800303 L30.0993377,0" id="Path-2" strokeLinecap="round"></path>
                    <path d="M0.397350993,105.240545 L0.198675497,11.3827534" id="Path-2-Copy-2" strokeLinecap="round"></path>
                    <path d="M59.9006623,105.240545 L59.9006623,11.3827534" id="Path-2-Copy" strokeLinecap="round"></path>
                    <ellipse id="Oval" fill="#F44336" cx="30.3377483" cy="77.3857791" rx="15.3377483" ry="15.3857791"></ellipse>
                    <path d="M0.397350993,11.3827534 L59.8013245,51.5219365" id="Path-3"></path>
                    <path d="M59.8013245,11.3827534 L0.397350993,51.5219365" id="Path-4"></path>
                </g>
            </g>
        </g>
    </svg>
  );
}

LogoDark.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LogoDark;
