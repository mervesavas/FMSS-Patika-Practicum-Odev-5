import React from 'react'

import PropTypes from "prop-types";


const Button = ({ type, children, ...restProps }) => {
  const className = `btn ${type}`;

  return (
    <button className={className} {...restProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["DarkCoffee", "Mocha", "Cappucino", "Latte", "LightCoffee"]),
  children: PropTypes.node.isRequired,
};

export default Button;
