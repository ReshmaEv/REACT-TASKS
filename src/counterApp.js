import { useEffect, useState } from "react";

function CounterApp(){
   
    const [count,setCount] =useState(0)
    const [calculation,setCalculation] = useState(0)

    const handleIncrement = ()=>{
        console.log("success");
        setCount(count+1)

    }
    const handleDecrement = () => {
        setCount(value=> {
            if (value > 0) {
                return value - 1;
            } else {
                return value;
            }
        });
    };

    useEffect(()=>{
        setCalculation(()=>count*2)
    },[count])
    
        
        
   
    return(
        <div>
            <>
            <button onClick={handleIncrement} style={{width:'100px',height:"50px",marginLeft:"50px",}}>add</button>
            <button  onClick={handleDecrement} style={{width:'100px',height:"50px",marginLeft:"50px"}}>mines</button>
             </>
            <div style={{fontSize:'30px',marginLeft:'50px',margintop:'50px'}}> count:{count}</div>
            <p>calculation:{calculation}</p>

            
        </div>



    )
}

export default CounterApp