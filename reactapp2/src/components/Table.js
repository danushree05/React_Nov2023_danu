import React, { useState } from "react";
function Table()
{
    const [employee]=useState(
    [
        {
            Id:1,
            name:"john",
            salary:15000,
        },
        {
            Id:2,
            name:"jack",
            salary:55000,
        },
        {
            Id:3,
            name:"mike",
            salary:55000,
        }
    ]
    );
    return (
        <div>
            <h1>Employeelist</h1>
            <hr></hr>
            <table border='2' cellpadding="10px" align="center">
                <tr>
                    <th >Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                </tr>
                {employee.map((k)=>(
                    <tr key={k.Id}>
                        <td>{k.Id}</td>
                        <td>{k.name}</td>
                        <td>{k.salary}</td>
                    </tr>

                ))}

                </table>
        </div>
    );
}
export default Table;
