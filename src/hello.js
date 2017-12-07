import React from 'react';
import PropTypes from 'prop-types';

const HelloComponent = ({ name }) => {
  return <div>Hello {name}</div>;
};

HelloComponent.PropTypes = {
    name: PropTypes.string.isRequired
}

export default HelloComponent;