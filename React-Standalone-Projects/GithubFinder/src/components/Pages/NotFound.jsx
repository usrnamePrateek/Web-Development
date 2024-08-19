import React from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="hero">
      <div className="text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-8xl font-bold mb-8">Oops!</h1>
          <p className="text-2xl mb-8">404 - Cannot find this page!!</p>
          <Link to="/" className="btn btn-primary btn-md normal-case">
            <FaHome className="mr-2" />
            Let's go back To home. Shall we?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
