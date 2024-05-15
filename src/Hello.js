// import React, { useState } from 'react'

import { useState } from "react"

// function Hello() {

//     const [name,setName]=useState({
//         name:name,
//         asgd
//     })
//     console.log(name);
   
   
   

//     function  handleSubmit(e){
//         e.preventDefault()
//         console.log(name);
//     }
//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//         <input type="text" onChange={(e)=>setName(e.target.value)} />

//         <input type="submit" />
//         </form>
//     </div>
//   )
// }


function Forms(){

    const [inputs,setInputs]= useState({});
    const [data,setData] = useState({})

    const handleChange =(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values,[name]:value}))
    }
    
    const handleSubmit =(e)=>{
        e.preventDefault();
       setData(inputs)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label >Enter your Name:
                <input 
                type="text"
                name="username"
                onChange={handleChange}
                 />
            </label>
        <br/>
        <br/>

            <label >Enter your email:
                <input
                 type="email"
                 name="email"
                 onChange={handleChange}
                 />
            </label>
            <br/>
            <br/>
            <label >Enter your Age:
                <input 
                type="number"
                name="age"
                onChange={handleChange}
                 />
                 <br/>
                 <br/>
                 <input type="submit" />
             </label>
            {data.age}
        
        </form>
    )
}

export default Forms

