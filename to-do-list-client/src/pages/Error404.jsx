
import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => (
  <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
    <h1 className="text-5xl font-bold text-font-primary mb-4">404</h1>
    <p className="text-xl mb-6 text-font-secondary">Page Not Found</p>
    <Link
      to="/"
      className="text-primary underline hover:text-font-primary transition"
    >
      Go back to Home
    </Link>
  </div>
);

export default Error404;
