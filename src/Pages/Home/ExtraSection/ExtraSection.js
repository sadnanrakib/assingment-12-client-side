import React from 'react';
import extra from '../../../assets/images/extraSectiion.png'

const ExtraSection = () => {
    return (
        
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={extra}
            className=" lg:w-1/2 rounded-lg shadow-2xl " alt=""
          />
          <div>
            <h1 className="text-5xl font-bold ">Box Office News!</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            {/* <PrimaryBtn>Get Started</PrimaryBtn> */}
          </div>
        </div>
      </div>
   
    );
};

export default ExtraSection;