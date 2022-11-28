import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/New Project.png";

const ErrorPage = () => {
  return (
    <div className="hero-content flex-col lg:flex-row-reverse mt-10">
      <img src={logo} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
      <div>
        <h1 className="text-5xl font-bold py-5 mr-10">
          Page 404 <br />
          Not Found
        </h1>

        <Link to="/" className="btn btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
