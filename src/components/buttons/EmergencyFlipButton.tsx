import React from 'react';
import { AnimatedButton } from './FlipButton';
import { BaseFlipProps } from './types';

export const EmergencyFlipButton: React.FC<BaseFlipProps> = ({
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
    variant="emergency"
    icon={icon}
  >
    {label}
  </AnimatedButton>
);
