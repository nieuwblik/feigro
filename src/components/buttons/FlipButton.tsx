import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'default' | 'large' | 'small' | 'icon';
  variant?: 'primary' | 'secondary' | 'emergency';
  fullWidthMobile?: boolean;
  icon?: React.ReactNode;
}

const sizeStyles: Record<string, string> = {
  default: 'h-[52px] px-6 text-sm',
  large: 'h-[68px] px-10 text-base',
  small: 'h-[44px] px-5 text-xs',
  icon: 'h-[52px] w-[52px] p-0',
};

const variantStyles = {
  primary: {
    base: 'bg-brand-green text-feigro-dark border-brand-green',
    hover: 'hover:bg-feigro-dark hover:text-white hover:border-feigro-dark',
  },
  secondary: {
    base: 'bg-brand-green text-feigro-dark border-brand-green',
    hover: 'hover:bg-feigro-dark hover:text-white hover:border-feigro-dark',
  },
  emergency: {
    base: 'bg-red-500 text-white border-red-500',
    hover: 'hover:bg-feigro-dark hover:text-white hover:border-feigro-dark',
  },
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  onClick,
  className = '',
  size = 'default',
  variant = 'primary',
  fullWidthMobile = true,
  icon,
}) => {
  const sizeStyle = sizeStyles[size] || sizeStyles.default;
  const variantStyle = variantStyles[variant] || variantStyles.primary;
  const mobileWidthClass = fullWidthMobile ? 'w-full md:w-auto' : 'w-fit';

  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`
        group relative inline-flex items-center justify-center gap-2
        font-bold uppercase tracking-wider
        border-2 rounded-xl
        transition-all duration-300 ease-out
        select-none whitespace-nowrap
        ${variantStyle.base}
        ${variantStyle.hover}
        ${sizeStyle}
        ${mobileWidthClass}
        ${className}
      `}
    >
      <span className="whitespace-nowrap">{children}</span>
      {icon || (
        <ArrowRight 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
          strokeWidth={2.5}
        />
      )}
    </motion.button>
  );
};

// Legacy exports for backwards compatibility
export const FlipButton = AnimatedButton;
export const FlipButtonFront: React.FC<{ children: React.ReactNode; variant?: string; size?: string; className?: string }> = () => null;
export const FlipButtonBack: React.FC<{ children: React.ReactNode; variant?: string; size?: string; className?: string }> = () => null;
