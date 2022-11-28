import React from "react";

const Categories = ({ cat, setItem }) => {
  const { name, image, resaleprice, newprice, author, location, edition } = cat;

  return (
    <div className="mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure>
          <img src={image} alt="No Found Phone" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <h2 className="card-title">Author: {author}</h2>
          <h2 className="card-title">New Price: {newprice}</h2>
          <h2 className="card-title">Old Price: {resaleprice}</h2>
          <h2 className="card-title">Edition: {edition}</h2>
          <h2 className="card-title">Location: {location}</h2>
          <div className="card-actions justify-end">
            {/* <Link to={`/allcategory/${_id}`}><BookMOdal>
              
                 </BookMOdal></Link> */}

            {/* <label htmlFor="book-modal" className="btn btn-primary"
                 onClick={()=>setItem(cat)}
                 >BOOK NAW
                 </label>
      */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
