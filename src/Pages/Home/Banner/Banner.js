import React from 'react';
import logo from '../../../assets/images/banner.png'

const Banner = () => {
    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={logo} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
        <div>
          <h1 className="text-5xl font-bold">Your Used Market Place Here</h1>
          <p className="py-6">
          Buy and sell everything from second-hand cars to mobile phones, or even find a new home. Find a great deal close to you, or search all of Bangladesh.
          </p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    );
};

export default Banner;