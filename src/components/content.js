import { useState, useEffect } from 'react';
import StudentList from './studentList';

const Content = () => {
    //       list       method
    const [students, setStudents] = useState([]);

    const [searchText, setSearchText] = useState("");

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