import { useState, useEffect } from 'react';
import StudentList from './studentList';

const Content = () => {
    //       list       method
    const [students, setStudents] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        //   object                             .then is a method belonging to that object
        fetch('http://localhost:7000/students/')
        .then(body => {console.log(body.json());})
    }, []);

























    const deleteHandler = (id) => {
        const list = students.filter(student => student.id != id);
        setStudents(list);
    };

    return (
        <div>
            <StudentList students={students} header="All current students" deleteHandler={deleteHandler}/>
            <br/>
            <label>Search : </label>
            <input 
            name='searchText'
            id='searchText'
            type='text'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            ></input>
            
            {searchText && 
            <StudentList 
            students={students.filter((student) => student.course.toLowerCase() === searchText.toLowerCase())}
            header={"Search Result - " + searchText}
            deleteHandler={deleteHandler}/>}
        </div>
    );
};  

export default Content;