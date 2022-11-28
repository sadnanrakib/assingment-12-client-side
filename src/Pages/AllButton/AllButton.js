import React from "react";
import { Link } from "react-router-dom";

const AllButton = () => {
  return (
    <div className="mt-5 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/8jVsXJd/Iphon13.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Iphone</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <Link to="/allcategory/IPhone" className="btn btn-outline">
        IPhone
      </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/9t1QkhY/Oneplus-3.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">One Plus</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <Link to="/allcategory/OnePlus" className="btn btn-outline">
        One Plus
      </Link>
          </div>
        </div>
      </div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://i.ibb.co/dLx5xQd/samsung-2.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Samsung</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
          <Link to="/allcategory/Samsung" className="btn btn-outline">
        Samsung
      </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AllButton;
