import React, { useState } from 'react';

const AddPhone = () => {

    const [category, setCategory] =useState('')
console.log(category)
const handleBooks = event =>{
    event.preventDefault()
    const from = event.target;
    const name = from.name.value;
    const image = from.image.value;
    const newprice = from.newprice.value;
    const oldPrice = from.oldPrice.value;
    const author = from.author.value;
    const edition = from.edition.value;
    const location = from.location.value;

    // console.log(name,image,price,author,edition)
   
        const sales = {name,image,newprice,oldPrice,author,edition,location,category}
        fetch('http://localhost:5000/addphone',{
            method:'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(sales)
        })
        .then(res =>res.json())
        .then(data=>{
            console.log("save books",data)
            from.reset()
        })
        .catch(er=>console.log(er))
  
    
}
    return (
        <form onSubmit={handleBooks} className="w-1/2 mx-auto">
              <div className="card flex-shrink-0 w-80px  shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input type="text" name='image' placeholder="image" className="input input-bordered w-200 h-200" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">New Price</span>
                    </label>
                    <input type="text" name='newprice' placeholder="newprice" className="input input-bordered" />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Old Price</span>
                     </label>
                     <input type="text" name='oldPrice' placeholder="oldprice" className="input input-bordered" />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Author</span>
                     </label>
                     <input type="text" name='author' placeholder="author" className="input input-bordered" />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Edition</span>
                     </label>
                     <input type="text" name='edition' placeholder="edition" className="input input-bordered" required/>
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Location</span>
                     </label>
                     <input type="text" name='location' placeholder="location" className="input input-bordered" />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text text-red-500">Please Select Catagory</span>
                     </label>
                   <select onChange={(e)=>setCategory(e.target.value)} className="input input-bordered">
                     <option value="selected disable"></option>
                     <option value="IPhone">I Phone</option>
                     <option value="OnePlus">One Plus</option>
                     <option value="Samsung">Samsung</option>
                   </select>
                   </div>
                   <div className="form-control mt-6">
                     <button className="btn btn-primary">Add Phone</button>
                  </div>
                </div>
               
              </div>
            
       </form>
    );
};

export default AddPhone;



// const [category, setCategory] =useState('')
// console.log(category)
// const handleBooks = event =>{
//     event.preventDefault()
//     const from = event.target;
//     const name = from.name.value;
//     const image = from.image.value;
//     const newprice = from.newprice.value;
//     const oldPrice = from.oldPrice.value;
//     const author = from.author.value;
//     const edition = from.edition.value;
//     const location = from.location.value;

//     // console.log(name,image,price,author,edition)
   
//         const sales = {name,image,newprice,oldPrice,author,edition,location,category}
//         fetch('http://localhost:5000/addbooks',{
//             method:'POST',
//             headers:{
//                 'content-type' : 'application/json'
//             },
//             body: JSON.stringify(sales)
//         })
//         .then(res =>res.json())
//         .then(data=>{
//             console.log("save books",data)
//             from.reset()
//         })
//         .catch(er=>console.log(er))
  
    
// }
// return (
//      <form onSubmit={handleBooks} className="w-3/4">
//      <div className="card flex-shrink-0 w-80px  shadow-2xl bg-base-100">
//         <div className="card-body">
//           <div className="form-control ">
//             <label className="label">
//               <span className="label-text">Name</span>
//             </label>
//             <input type="text" name='name' placeholder="name" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Image</span>
//             </label>
//             <input type="text" name='image' placeholder="image" className="input input-bordered w-200 h-200" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">New Price</span>
//             </label>
//             <input type="text" name='newprice' placeholder="newprice" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Old Price</span>
//             </label>
//             <input type="text" name='oldPrice' placeholder="oldprice" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Author</span>
//             </label>
//             <input type="text" name='author' placeholder="author" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Edition</span>
//             </label>
//             <input type="text" name='edition' placeholder="edition" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Location</span>
//             </label>
//             <input type="text" name='location' placeholder="location" className="input input-bordered" />
//           </div>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">catagory</span>
//             </label>
//           <select onChange={(e)=>setCategory(e.target.value)}>
//             <option value="" selected disable>please select</option>
//             <option value="honorsfirstyear">honors first year</option>
//             <option value="honorssecondyear">honors second year</option>
//             <option value="honorsthirdyear">honors third year</option>
//           </select>
//           </div>
//           <div className="form-control mt-6">
//             <button className="btn btn-primary">Add Books</button>
//           </div>
//         </div>
       
//       </div>
    
//      </form>
// );
// };

// export default AddBooks;