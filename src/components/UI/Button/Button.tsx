import React from 'react';

const Button = ({title, className}: string) => {
  return (
    <button className={className}>
      {title}
    </button>
  );
};

export default Button;