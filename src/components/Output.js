import React from 'react';
import PropTypes from 'prop-types';

export default function Output(props) {
  Output.propTypes = {
    total: PropTypes.string.isRequired,
    next: PropTypes.string.isRequired,
    operation: PropTypes.string.isRequired,
  };
  const { total, next, operation } = props;
  return (
    <div className="output">
      <div className="operand">
        <p>
          { total }
          { operation }
          { next }
        </p>
      </div>
    </div>
  );
}
