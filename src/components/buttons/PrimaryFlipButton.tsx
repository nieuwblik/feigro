import React from 'react';
import { AnimatedButton } from './FlipButton';
import { BaseFlipProps } from './types';

export const PrimaryFlipButton: React.FC<BaseFlipProps> = ({ 
  label, 
  icon, 
  onClick, 
  className, 
  size 
}) => (
  <AnimatedButton 
    onClick={onClick} 
    className={className} 
    size={size}
    variant="primary"
    icon={icon}
  >
    {label}
  </AnimatedButton>
);
