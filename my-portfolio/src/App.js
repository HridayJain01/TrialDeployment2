import './App.css';
import Navbar from './Navbar'; // Import Navbar component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProjectsPage from './ProjectsPage';
import ContactsPage from './ContactsPage';
let name="Hriday Jain";


function Apps() {
  return (
    <>
      <Navbar /> 
      <Router>
      <Routes>
        <Route exact path="/" element={App} />
        <Route path="/projects" element={ProjectsPage} />
        <Route path="/contact" element={ContactsPage} />
      </Routes>
    </Router>
      <h1 className="title">My Portfolio</h1>
      <p className="description">This is a demo of my portfolio of {name} </p>
    </>
  );
}

export default Apps;

