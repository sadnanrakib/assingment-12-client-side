import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Categories from './Categories';

const AllCategory = () => {

  const category= useLoaderData()
      const [item, setItem] = useState(null)
  return (
    <div className='mt-5'>
      
        
          <div className='grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                {
                  category?.map((cat,i)=> <Categories
                  key={i}
                    cat={cat}
                    
                    // setItem={setItem}
                   ></Categories>) 
              
                }
                {/* {item &&
                    <BookMOdal
                    item={item}
                    ></BookMOdal>
                } */}
            </div>
        </div>
  );
};

export default AllCategory;


// import React, { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import BookMOdal from '../BookModal/BookMOdal';
// import Category from './Category';

// const AllCategory = () => {
//     const category= useLoaderData()
//     const [item, setItem] = useState(null)
//     return (
//         <div className='mt-5'>
        
//         <div className='grid gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
//             {
//               category?.map(cat=> <Category
//                 cat={cat}
//                 setItem={setItem}
//                ></Category>) 
               
//             }
//             {item &&
//                 <BookMOdal
//                 item={item}
//                 ></BookMOdal>
//             }
//         </div>
//     </div>
//     );
// };

// export default AllCategory;