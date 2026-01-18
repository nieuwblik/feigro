import React from 'react';
import { FlipButton, FlipButtonFront, FlipButtonBack } from './FlipButton';
import { BaseFlipProps } from './types';

export const InversedFlipButton: React.FC<BaseFlipProps> = ({ 
  label, 
  hoverLabel, 
  icon, 
  hoverIcon, 
  onClick, 
  className, 
  size 
}) => (
  <FlipButton onClick={onClick} className={className} size={size}>
    <FlipButtonFront variant="secondary" size={size}>
      <span className="whitespace-nowrap">{label}</span>
      {icon}
    </FlipButtonFront>
    <FlipButtonBack variant="primary" size={size}>
      <span className="whitespace-nowrap">{hoverLabel || label}</span>
      {hoverIcon || icon}
    </FlipButtonBack>
  </FlipButton>
);
