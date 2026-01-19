import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlipButtonProps, FlipButtonPartProps } from './types';

const variantStyles: Record<string, string> = {
  primary: `bg-brand-green text-black border-brand-green`,
  secondary: `bg-black text-white border-black`,
  outline: `bg-transparent text-brand-green border-brand-green`,
  white: `bg-transparent text-white border-white`,
  whiteSolid: `bg-white text-black border-white`,
  ghost: `bg-transparent text-brand-green border-transparent`,
  blackOutline: `bg-transparent text-black border-black`,
  emergency: `bg-red-500 text-white border-red-500`,
};

const sizeStyles: Record<string, string> = {
  default: 'h-[52px] px-6 text-lg',
  large: 'h-[68px] px-10 text-2xl',
  icon: 'h-[52px] w-[52px] p-0',
  small: 'h-[44px] px-5 text-base',
};

const translateOffsets: Record<string, string> = {
  default: '26px',
  large: '34px',
  icon: '26px',
  small: '22px',
};

export const FlipButtonFront: React.FC<FlipButtonPartProps & { isHovered?: boolean }> = ({
  children,
  variant = 'primary',
  size = 'default',
  className = '',
  isHovered
}) => {
  const baseStyle = variantStyles[variant] || variantStyles.primary;
  const sizeStyle = sizeStyles[size] || sizeStyles.default;
  const offset = translateOffsets[size] || translateOffsets.default;

  return (
    <motion.div
      className={`relative flex items-center justify-center gap-2 font-bold border-2 rounded-xl select-none whitespace-nowrap ${baseStyle} ${sizeStyle} ${className}`}
      initial={false}
      animate={{
        opacity: isHovered ? 0 : 1,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      style={{
        backfaceVisibility: 'hidden',
        transform: `translateZ(${offset})`,
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {children}
    </motion.div>
  );
};

export const FlipButtonBack: React.FC<FlipButtonPartProps & { isHovered?: boolean }> = ({
  children,
  variant = 'secondary',
  size = 'default',
  className = '',
  isHovered
}) => {
  const baseStyle = variantStyles[variant] || variantStyles.secondary;
  const sizeStyle = sizeStyles[size] || sizeStyles.default;
  const offset = translateOffsets[size] || translateOffsets.default;

  return (
    <motion.div
      className={`absolute inset-0 flex items-center justify-center gap-2 font-bold border-2 rounded-xl select-none whitespace-nowrap ${baseStyle} ${sizeStyle} ${className}`}
      initial={false}
      animate={{
        opacity: isHovered ? 1 : 0,
        transition: { duration: 0.2, ease: "easeInOut" }
      }}
      style={{
        backfaceVisibility: 'hidden',
        transform: `rotateX(-90deg) translateZ(${offset})`,
        WebkitFontSmoothing: 'antialiased'
      }}
    >
      {children}
    </motion.div>
  );
};

export const FlipButton: React.FC<FlipButtonProps & { size?: 'default' | 'large' | 'icon' | 'small' }> = ({
  children,
  className = '',
  onClick,
  size = 'default'
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { isHovered });
    }
    return child;
  });

  const height = size === 'large' ? '68px' : size === 'small' ? '44px' : '52px';
  const minWidth = size === 'icon' ? height : '120px';

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      className={`relative outline-none inline-block group w-fit min-w-fit ${className}`}
      style={{
        height: height,
        minWidth: minWidth,
        perspective: '1000px',
      }}
    >
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transformOrigin: 'center center'
        }}
        animate={{ rotateX: isHovered ? 90 : 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 22,
          mass: 0.8
        }}
      >
        {childrenWithProps}
      </motion.div>
    </motion.button>
  );
};
