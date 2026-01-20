import { ReactNode } from 'react';

interface ScrollStackItemProps {
  children: ReactNode;
  itemClassName?: string;
  style?: React.CSSProperties;
}

export const ScrollStackItem = ({
  children,
  itemClassName = '',
  style
}: ScrollStackItemProps) => {
  return (
    <div className={itemClassName} style={style}>
      {children}
    </div>
  );
};

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
}

const ScrollStack = ({ children, className = '' }: ScrollStackProps) => {
  const childrenArray = Array.isArray(children) ? children : [children];

  return (
    <div className={`relative w-full bg-black ${className}`}>
      {childrenArray.map((child: any, index) => (
        <div
          key={index}
          style={{
            height: index === childrenArray.length - 1 ? '100vh' : '150vh',
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '10vh'
          }}
        >
          <div
            className="sticky w-[90vw] md:w-[60vw] h-[70vh] md:h-[80vh] rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.5)] mx-auto"
            style={{
              top: `${index * 40}px`,
              zIndex: childrenArray.length - index,
              ...child.props.style
            }}
          >
            <div className={child.props.itemClassName || ''} style={{ width: '100%', height: '100%' }}>
              {child.props.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollStack;
