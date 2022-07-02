import '../App.css';


/*const students = [
    {
        "id": "1",
        "firstName" : "Michell",
        "lastName" : "Valdivia",
        "course" : "MERN",
    },
    {
        "id": "2",
        "firstName" : "Abby",
        "lastName" : "Smith",
        "course" : "Python",
    }
];*/


const StudentList = ({students, header, deleteHandler}) => { 
    return(
        <div className="student-list">
            <h2 style={{padding: "20px"}}>{header}</h2>
            {students.map(student => (
                <div class="student-preview" key={student.id}>
                    <h2>{student.firstName} {student.lastName}</h2>
                    <p>Enrolled to {student.course}</p>
                    <button onClick={() => deleteHandler(student.id)}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default StudentList;