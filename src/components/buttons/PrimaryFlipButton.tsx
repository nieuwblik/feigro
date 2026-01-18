import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BaseFlipProps } from './types';

// Placeholder component - replace with actual implementation when uploaded
export const PrimaryFlipButton: React.FC<BaseFlipProps> = ({ 
  label, 
  hoverLabel,
  icon,
  onClick, 
  className = '',
  size = 'default'
}) => {
  const sizeClasses = {
    small: 'px-4 py-2 text-xs',
    default: 'px-6 py-3 text-sm',
    large: 'px-8 py-4 text-base',
    icon: 'p-3'
  };

  return (
    <button
      onClick={onClick}
      className={`
        bg-brand-green text-black font-bold rounded-full
        hover:scale-105 active:scale-95 transition-all duration-200
        shadow-lg shadow-brand-green/20 flex items-center gap-2
        ${sizeClasses[size]}
        ${className}
      `}
    >
      <span>{label}</span>
      {icon || <ArrowRight size={size === 'large' ? 20 : 16} />}
    </button>
  );
};
