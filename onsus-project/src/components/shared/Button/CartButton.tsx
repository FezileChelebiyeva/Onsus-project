import React from 'react';
import './CartButton.scss'

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cart-btn ${className}`} // 'btn' can be a base style in your CSS
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
