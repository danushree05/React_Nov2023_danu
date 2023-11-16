import React,{ useState } from "react";
function Listitem()
{
    const [student]= useState([
        {
            id: 1,
            name:"john",
            age:55,
        },
        {
            id: 2,
            name:"mike",
            age:51,
        },
        {
            id: 3,
            name:"jack",
            age:21,
        }
        ])

return (
    <div>
        <h1>Listitems</h1>
        <hr></hr>
        <ul style={{ listStyleType: "none"}}>
        {student.map((k) => (

            <li>
                <h2>Id: {k.id}</h2>
                <p>Name: {k.name}</p>
                <p>Age: {k.age}</p>
            </li>
        ))}
        </ul>
    </div>
);
}
export default Listitem ;