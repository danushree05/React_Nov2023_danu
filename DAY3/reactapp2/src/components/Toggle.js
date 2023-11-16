import React, {useState} from "react";
function Toggle () {
    // const [name,setName]=useState("aaa");
    // const transformationHandler = () => {
        //     if(name === "aaa")
        //     setName("bbb");
        //     else
        //      setName("aaa");
        // };
        
     const [name,setName]=useState("aaa");
     const [count,setCount]=useState(0);
     const transformationHandler = () => {
        let value=count;
        setCount(++value);
        if(count==3)
        {
            if(name==="aaa")
            setName("bbb");
            else
            setName("aaa");
        setCount(0);
        }
     }
    return (
        <div>
            <h1>Toggle</h1>
            <hr></hr>
            <h2>{name}</h2>
            <button onClick={transformationHandler}>Toggle</button>
        </div>
    )
}
export default Toggle