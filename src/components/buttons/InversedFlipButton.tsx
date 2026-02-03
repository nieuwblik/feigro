import React from 'react';
import { AnimatedButton } from './FlipButton';
import { BaseFlipProps } from './types';

export const InversedFlipButton: React.FC<BaseFlipProps> = ({ 
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
    variant="secondary"
    icon={icon}
  >
    {label}
  </AnimatedButton>
);
