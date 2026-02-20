import React from 'react';
import { AnimatedButton } from './FlipButton';
import { BaseFlipProps } from './types';

export const PrimaryFlipButton: React.FC<BaseFlipProps & { fullWidthMobile?: boolean }> = ({
  label,
  icon,
  onClick,
  className,
  size,
  fullWidthMobile
}) => (
  <AnimatedButton
    onClick={onClick}
    className={className}
    size={size}
    variant="primary"
    icon={icon}
    fullWidthMobile={fullWidthMobile}
  >
    {label}
  </AnimatedButton>
);
