import NavBar from "./components/navbar";
import Content from "./components/content";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import StudentDetails from "./components/studentdetails";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/create" element={<div><h1>Create new student</h1></div>}></Route>
        <Route path="/list" element={<Content></Content>}></Route>
        <Route path="/" element={<div><h1>Welcome Page</h1></div>}></Route>
        <Route path="/students/:id" element={<StudentDetails></StudentDetails>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
