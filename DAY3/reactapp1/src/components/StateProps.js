import {useState} from "react";
function StateProps() {
    //create state
     const [name,setName]=useState("danu❤");
     const [num,setNum]=useState(19);
     const [student,setStudent]=useState({name:'Avan',age:50});
     const namehandler = () => {
        setName("indhu❤");
     };
     const numhandler = () => {
       
        let no=student.age;
        setStudent({name:"avan",age:++no});
     }
     return (
        <div>
            <h1>StateProps</h1><hr></hr>

            <h2>Hi {name}</h2><br></br>
            <h2>Number is {num}</h2>
            <h2>Student name is {student.name} and age is {student.age}</h2>
            <button onClick={namehandler}>change name</button><br></br>
            <button onClick={numhandler}>change age</button>
        </div>
     );
}
export default StateProps;