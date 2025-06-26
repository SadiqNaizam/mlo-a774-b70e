import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container flex items-center justify-center py-8">
        <Card className="w-full max-w-2xl text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Welcome to Your Dashboard</CardTitle>
            <CardDescription>You have successfully logged in.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              This is a protected page that you can only see after authenticating.
              The main application features would be presented here.
            </p>
            <div className="flex justify-center gap-4">
              <Button>Explore Features</Button>
              <Link to="/">
                 <Button variant="outline">Go Back Home</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;