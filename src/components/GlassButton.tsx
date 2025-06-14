
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export const GlassButton = ({ 
  children, 
  className, 
  onClick, 
  href, 
  variant = 'primary' 
}: GlassButtonProps) => {
  const baseClasses = cn(
    "px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center space-x-2",
    "hover:backdrop-blur-3xl hover:scale-105 hover:shadow-xl cursor-pointer",
    className
  );

  const style = {
    backdropFilter: 'blur(20px)',
    background: variant === 'primary' 
      ? 'rgba(255, 255, 255, 0.06)' // Reduced from 0.12
      : 'rgba(255, 255, 255, 0.03)', // Reduced from 0.06
    border: '1px solid rgba(255, 255, 255, 0.1)', // Reduced from 0.2
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3), 0 12px 40px rgba(0, 0, 0, 0.2)'; // Reduced glow
    e.currentTarget.style.background = variant === 'primary' 
      ? 'rgba(255, 255, 255, 0.12)' // Reduced from 0.2
      : 'rgba(255, 255, 255, 0.08)'; // Reduced from 0.15
    e.currentTarget.style.backdropFilter = 'blur(25px)';
    e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
    e.currentTarget.style.background = variant === 'primary' 
      ? 'rgba(255, 255, 255, 0.06)' 
      : 'rgba(255, 255, 255, 0.03)';
    e.currentTarget.style.backdropFilter = 'blur(20px)';
    e.currentTarget.style.transform = 'scale(1) translateY(0)';
  };

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        style={style}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={baseClasses}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  );
};
