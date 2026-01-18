import React from 'react';

export interface FlipButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface FlipButtonPartProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'whiteSolid' | 'ghost' | 'blackOutline';
  size?: 'default' | 'large' | 'icon' | 'small';
  className?: string;
}

export interface BaseFlipProps {
  label: string;
  hoverLabel?: string;
  icon?: React.ReactNode;
  hoverIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large' | 'icon' | 'small';
}

export interface ButtonStyles {
  containerBorder: string;
  containerBg: string;
  textColor: string;
  hoverTextColor: string;
  circleBg: string;
  iconColor: string;
  hoverIconColor: string;
}

export interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showBgInDefault?: boolean;
  styles?: ButtonStyles;
}
