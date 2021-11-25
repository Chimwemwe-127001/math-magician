/* eslint-disable react/prop-types */
import React from 'react';

export default function Output(props) {
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
