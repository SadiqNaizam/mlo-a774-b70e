import React from 'react';
import { KeyRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  /**
   * Optional className to apply to the root element for custom styling.
   */
  className?: string;
}

/**
 * Displays the application's logo and name, "SwiftLogin".
 * It links to the homepage.
 */
const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  console.log('BrandLogo loaded');

  return (
    <Link
      to="/"
      aria-label="Go to SwiftLogin homepage"
      className={cn(
        'flex items-center gap-2 text-foreground transition-colors hover:text-primary',
        className
      )}
    >
      <KeyRound className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold tracking-tight">
        SwiftLogin
      </span>
    </Link>
  );
};

export default BrandLogo;