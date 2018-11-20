import React from 'react';
import PropTypes from 'prop-types';

function LogoGreyscale(props) {
  return (
    <svg  width={props.size + 'px'} height={props.size + 'px'} viewBox="0 0 276 565" version="1.1">
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="logo" transform="translate(-503.000000, -138.000000)" fillRule="nonzero">
                <g id="logo-greyscale" transform="translate(521.000000, 157.000000)">
                    <g id="Rectangle">
                        <g id="Mask" stroke="#EEEEEE" strokeWidth="36.8">
                            <path d="M120.397351,527.20121 L120.397351,0" id="Path-2" strokeLinecap="round"></path>
                            <path d="M1.58940397,420.962179 L0.794701987,45.5310136" id="Path-2-Copy-2" strokeLinecap="round"></path>
                            <path d="M239.602649,420.962179 L239.602649,45.5310136" id="Path-2-Copy" strokeLinecap="round"></path>
                            <path d="M1.58940397,45.5310136 L239.205298,206.087746" id="Path-3"></path>
                            <path d="M239.205298,45.5310136 L1.58940397,206.087746" id="Path-4"></path>
                            <ellipse id="Oval" fill="#BDBDBD" cx="120.850993" cy="310.043116" rx="62.2509934" ry="62.4431165"></ellipse>
                        </g>
                        <rect fill="#D8D8D8" x="-22" y="-25" width="285" height="576"></rect>
                    </g>
                </g>
            </g>
        </g>
    </svg>
  );
}

LogoGreyscale.propTypes = {
  size: PropTypes.number.isRequired,
};

export default LogoGreyscale;
