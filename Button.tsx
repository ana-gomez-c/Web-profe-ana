import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: () => void;
  isLoading?: boolean;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  type = 'button', 
  href, 
  onClick, 
  isLoading = false,
  className = '',
  size = 'medium'
}) => {
  const baseClasses = "inline-flex items-center justify-center font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-coral-500";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };
  
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${className} ${
    isLoading ? 'bg-coral-400 cursor-not-allowed' : 'bg-coral-500 hover:bg-coral-600 active:bg-coral-700'
  } text-white shadow-md hover:shadow-lg`;
  
  const content = (
    <>
      {isLoading ? (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      ) : null}
      {children}
    </>
  );
  
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  
  return (
    <button 
      type={type} 
      className={buttonClasses}
      onClick={onClick}
      disabled={isLoading}
    >
      {content}
    </button>
  );
};

export default Button;