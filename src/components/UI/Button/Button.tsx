import React from 'react';

const Button = ({title}: string) => {
  return (
    <button className='button'>
      {title}
    </button>
  );
};

export default Button;