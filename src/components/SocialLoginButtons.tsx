import React from 'react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

// Custom SVG Icon for Google
const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>Google</title>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.85 3.18-1.73 4.1-1.02 1.02-2.9 2.04-5.07 2.04-3.83 0-6.95-3.12-6.95-6.95s3.12-6.95 6.95-6.95c2.21 0 3.63 1.04 4.45 1.82l2.44-2.44C19.21 3.24 16.32 1.73 12.48 1.73 6.43 1.73 1.73 6.54 1.73 12.5s4.7 10.77 10.75 10.77c6.3 0 10.37-4.35 10.37-10.45 0-.75-.08-1.48-.2-2.18H12.48z" />
  </svg>
);

// Custom SVG Icon for Facebook
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
        <title>Facebook</title>
        <path d="M22.675 0h-21.35C.589 0 0 .589 0 1.325v21.351C0 23.411.589 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.736 0 1.325-.589 1.325-1.325V1.325C24 .589 23.411 0 22.675 0z"/>
    </svg>
);


interface SocialLoginButtonsProps {
  className?: string;
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ className }) => {
  console.log('SocialLoginButtons loaded');

  const handleSocialLogin = (provider: 'google' | 'github' | 'facebook') => {
    // Placeholder for actual social login logic
    console.log(`Attempting to login with ${provider}...`);
    // In a real app, you would redirect to the provider's auth URL
    // e.g., window.location.href = `/auth/${provider}`;
  };

  return (
    <div className={className}>
      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Button variant="outline" type="button" onClick={() => handleSocialLogin('github')}>
          <Github className="mr-2 h-4 w-4" />
          GitHub
        </Button>
        <Button variant="outline" type="button" onClick={() => handleSocialLogin('google')}>
          <GoogleIcon className="mr-2 h-4 w-4" />
          Google
        </Button>
        <Button
            variant="outline"
            type="button"
            className="bg-[#1877F2] text-white hover:bg-[#166FE5] hover:text-white border-[#1877F2]"
            onClick={() => handleSocialLogin('facebook')}
        >
            <FacebookIcon className="mr-2 h-4 w-4 fill-current" />
            Facebook
        </Button>
      </div>
    </div>
  );
};

export default SocialLoginButtons;