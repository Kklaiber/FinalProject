import React from 'react';
import spinner2 from './spinner2.gif';

export default () => {
  return (
    <div>
      <img
        src={spinner2}
        style={{ width: '50px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  );
};
