import React from 'react';
import extra from '../../../assets/images/extraSectiion.png'

const ExtraSection = () => {
    return (
        
      <div className="hero my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={extra}
            className=" lg:w-1/2 rounded-lg shadow-2xl " alt=""
          />
          <div className='ml-10'>
            <h1 className="text-5xl font-bold ">Box Office News!</h1>
            <p className="py-6 ">
            Buy and sell everything from second-hand cars to mobile phones, or even find a new home. Find a great deal close to you, or search all of Bangladesh.
            </p>
            <button className='btn btn-primary'>Get Started</button>
          </div>
        </div>
      </div>
   
    );
};

export default ExtraSection;