import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  variant?: 'default' | 'wow' | 'dark';
}

const Card: React.FC<CardProps> = ({ children, className = '', title, variant = 'default' }) => {
  const variantClasses = {
    default: 'bg-white border border-gray-200 shadow-md',
    wow: 'bg-gradient-to-br from-slate-800 to-slate-900 border border-wow-gold/30 shadow-xl shadow-wow-gold/10',
    dark: 'bg-gray-800 border border-gray-700 shadow-lg'
  };
  
  return (
    <div className={`rounded-lg ${variantClasses[variant]} ${className}`}>
      {title && (
        <div className={`px-6 py-4 border-b ${variant === 'wow' ? 'border-wow-gold/30 text-wow-gold font-cinzel font-bold' : 'border-gray-200 text-gray-900 font-semibold'}`}>
          {title}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};

export default Card;