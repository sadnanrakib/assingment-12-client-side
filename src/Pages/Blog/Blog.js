import React from 'react';

const Blog = () => {
    return (
        <div className='mx-16 my-10 grid gap-20 grid-cols-1 sm:grid-cols-2 '>
           <div className='bg-slate-200 py-10 px-10 rounded-xl mb-5'>
           <h3 className='text-3xl'>Q1. What are the different ways to manage a state in a React application?</h3>
                <p className='mt-3'><span className='text-red-400'>Ans:</span> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app</p>
            
           </div>
           <div className='bg-slate-200 py-10 px-10 rounded-xl mb-5'>
           <h3 className='text-3xl'>Q2.How does prototypical inheritance work?</h3>
                <p className='mt-3'><span className='text-red-400'>Ans:</span>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            
           </div>
           <div className='bg-slate-200 py-10 px-10 rounded-xl mb-5'>
           <h3 className='text-3xl'>Q3.What is a unit test? Why should we write unit tests?</h3>
                <p className='mt-3'><span className='text-red-400'>Ans:</span> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            
           </div>
           <div className='bg-slate-200 py-10 px-10 rounded-xl mb-5'>
           <h3 className='text-3xl'>Q4.React vs. Angular vs. Vue?</h3>
                <p className='mt-3'><span className='text-red-400'>Ans:</span> Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</p>
            
           </div>
        </div>
    );
};

export default Blog;