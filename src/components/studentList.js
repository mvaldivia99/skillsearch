import '../App.css';
import { Link } from 'react-router-dom';

const StudentList = ({students, header, deleteHandler}) => { 
    return(
        <div className="student-list">
            <h2 style={{padding: "20px"}}>{header}</h2>
            {students.map(student => (
                
                <div class="student-preview" key={student._id}>
                    <Link to={`/students/${student._id}`}>
                    <h2>{student.firstName} {student.lastName}</h2>
                    </Link>
                </div>

            ))}
        </div>
    );
}

export default StudentList;