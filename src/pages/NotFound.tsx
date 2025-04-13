
import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-500 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link to="/">
            <Button className="bg-brand-blue hover:bg-blue-800">
              <ArrowLeft size={18} className="mr-2" />
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
