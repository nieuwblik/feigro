export const COLORS = {
  darkGreen: '#4CB26E',
  primaryGreen: '#4CB26E',
  pureWhite: '#FFFFFF',
  black: '#000000',
  softGray: '#F9FAFB',
};

export const SPRING_TRANSITION = {
  type: 'spring',
  stiffness: 300,
  damping: 20,
} as const;

export const SLOW_SPRING = {
  type: 'spring',
  stiffness: 100,
  damping: 15,
} as const;
