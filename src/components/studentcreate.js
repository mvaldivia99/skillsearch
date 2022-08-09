import { useState } from "react";
import { useNavigate } from "react-router-dom";

//functional component
const StudentCreate = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [course, setCourse] = useState("");
    const navigate = useNavigate();


    const createStudent = (e) => {
        e.preventDefault();

        //                 key        value
        const student = {firstName: firstName, lastName: lastName, course: course};

        fetch('http://localhost:5000/students/', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(student)
        })
        .then(() => {
            // once we are done navigate to the student list
            navigate("/list");
        });
    }



    return(
        <div className="create">
            <h2>Create a new student</h2>
            <form>

                <label>First Name</label>
                <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                >
                </input>


                <label>Last Name</label>
                <input
                type="text"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                ></input>

                <label>Course</label>
                <select value={course}
                onChange={(e) => setCourse(e.target.value)}>
                    <option value="python">PYTHON</option>
                    <option value="mern">MERN</option>
                    <option value="sql">SQL</option>
                    <option value="java">JAVA</option>
                </select>
                <button onClick={createStudent} style={{backgroundColor: "blue"}}>Add Student</button>
            </form>
        </div>
    );

}

export default StudentCreate;