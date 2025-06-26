import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import BrandLogo from '@/components/BrandLogo'; // Custom component
import SocialLoginButtons from '@/components/SocialLoginButtons'; // Custom component
import { useToast } from '@/components/ui/use-toast';

const LoginPage = () => {
  console.log('LoginPage loaded');
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // In a real application, you would add your authentication logic here.
    console.log('Login attempt with:', { email, password });

    // Simulate a successful login
    if (email && password) {
      toast({
        title: "Login Successful",
        description: "Redirecting to your dashboard...",
      });
      // Redirect to the dashboard page after a short delay to show the toast
      setTimeout(() => {
        navigate('/dashboard'); // Path from App.tsx
      }, 1000);
    } else {
      toast({
        variant: 'destructive',
        title: "Login Failed",
        description: "Please enter both email and password.",
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-muted/40 p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="items-center text-center">
          <BrandLogo />
          <CardTitle className="pt-4">Log in to your account</CardTitle>
          <CardDescription>
            Enter your credentials to access your dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    to="/forgot-password" // Path from App.tsx
                    className="text-sm font-medium text-primary hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="Enter your password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
            </div>
          </form>
          <SocialLoginButtons className="mt-4" />
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <Link
              to="/registration" // Path from App.tsx
              className="font-medium text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;