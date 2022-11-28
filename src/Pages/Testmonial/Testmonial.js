import React from 'react';
import Review from './Review';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.JPG';
import people2 from '../../assets/images/people2.jpeg';
import people3 from '../../assets/images/people3.jpeg';


const Testmonial = () => {
    const reviews = [
        {
          _id: 1,
          name: "Rs Rakib",
          img: people1,
          review:
            "I am Not Ever seen this person type people..Bcz He is good person and his products are great..I love this..i recommend to all people to buy his product by his Shop",
          location: "Chittagong",
        },
        {
          _id: 2,
          name: "Hedaytul Islam",
          img: people2,
          review:
            "I am Not Ever seen this person type people..Bcz He is good person and his products are great..I love this..i recommend to all people to buy his product by his Shop",
          location: "Khulna",
        },
        {
          _id: 3,
          name: "Sifat Hosseen",
          img: people3,
          review:
            "I am Not Ever seen this person type people..Bcz He is good person and his products are great..I love this..i recommend to all people to buy his product by his Shop",
          location: "Dhaka",
        },
      ];
    return (
        <section className="my-16">
      <div className="flex justify-between">
        <div>
          <h4 className="text-xl text-primary font-bold">Testimonial</h4>
          <h2 className="text-4xl">Our Customer Review</h2>
        </div>
        <figure>
          <img className="w-24 lg:w-48" src={quote} alt="" />
        </figure>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </section>
    );
};

export default Testmonial;