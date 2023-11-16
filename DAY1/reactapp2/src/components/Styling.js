import React from "react";
const Styling =()=>
{
    const pstyle=
    {
        backgroundColor:"lightblue",
        color:"darkblue",
    };
    return (
        <div>
            <h1 style={{color:"green"}}>Inline style in JSX Example</h1>
            <p style={pstyle}>This is paragraph with inline styles app</p>
        </div>
    );
}
export default Styling;