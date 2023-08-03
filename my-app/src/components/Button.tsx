
import React from 'react';

interface ButtonProps {
  title: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ title, className}) => {
  return (
    <button className={className} >
      {title}
    </button>
  );
};

export default Button;
