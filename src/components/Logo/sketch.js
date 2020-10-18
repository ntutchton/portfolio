import React from 'react';
import PropTypes from 'prop-types';

function Sketch(props) {
  return (
    <svg height={`${props.size}px`} viewBox="0 0 139 126" version="1.1">
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="timeline" transform="translate(-152.000000, -1753.000000)" fill-rule="nonzero">
            <g id="Sketch_Logo" transform="translate(152.000000, 1753.000000)">
                <polygon id="Path" points="30.3272729 4.14843751 69.5000002 0 108.672727 4.14843751 139 44.9296875 69.5000002 126 0 44.9296875"></polygon>
                <g id="Group" transform="translate(0.000000, 45.000000)">
                    <polygon id="Path" fill="#424242" points="28.0942284 0 69.3599416 80.9794847 0 0"></polygon>
                    <polygon id="Path" fill="#424242" transform="translate(104.039725, 40.489742) scale(-1, 1) translate(-104.039725, -40.489742) " points="97.4539824 0 138.719696 80.9794847 69.3597539 0"></polygon>
                    <polygon id="Path" fill="#696969" points="28.0942284 0 110.625655 0 69.3599416 80.9794847"></polygon>
                </g>
                <g id="Group">
                    <polygon id="Path" fill="#9D9D9D" points="69.3599416 0 30.2660152 4.15098425 28.0942284 44.9578346"></polygon>
                    <polygon id="Path" fill="#9D9D9D" transform="translate(89.992585, 22.478917) scale(-1, 1) translate(-89.992585, -22.478917) " points="110.625442 0 71.5315153 4.15098425 69.3597285 44.9578346"></polygon>
                    <polygon id="Path" fill="#696969" transform="translate(123.586688, 24.554409) scale(-1, 1) translate(-123.586688, -24.554409) " points="108.453504 44.9578346 138.719872 4.15098425 136.547732 44.9578346"></polygon>
                    <polygon id="Path" fill="#696969" points="0 44.9578346 30.2660152 4.15098425 28.0942284 44.9578346"></polygon>
                    <polygon id="Path" fill="#CECECE" points="69.3599416 0 28.0942284 44.9578346 110.625655 44.9578346"></polygon>
                </g>
            </g>
        </g>
      </g>
    </svg>
  );
}

Sketch.propTypes = {
  size: PropTypes.number.isRequired,
};

export default Sketch;