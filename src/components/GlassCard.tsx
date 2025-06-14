
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const GlassCard = ({ children, className, hover = true }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl transition-all duration-500",
        hover && "hover:backdrop-blur-3xl hover:scale-[1.02] hover:shadow-2xl",
        className
      )}
      style={{
        backdropFilter: 'blur(20px)',
        background: 'rgba(255, 255, 255, 0.04)', // Reduced from 0.08
        border: '1px solid rgba(255, 255, 255, 0.08)', // Reduced from 0.15
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      }}
    >
      {children}
    </div>
  );
};
