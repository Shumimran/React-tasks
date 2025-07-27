import { useState } from "react"

const Counter = ()=>{
    const [count , setCount] = useState(1);
    const changeCounter = ()=>{
        setCount(count +1);
    } ;

    return(
        <div className="counter" style={{marginTop: "10px"}}>
            <h1 className="countText">{count}</h1>
            <button className="greetBtn" onClick={changeCounter}>Counter</button>
        </div>
    )
}
export default Counter;