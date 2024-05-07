import './App.css';
import Navbar from './Navbar'; // Import Navbar component
let name="Hriday Jain";

function App() {
  return (
    <>
      <Navbar /> 
      <h1 className="title">My Portfolio</h1>
      <p className="description">This is a demo of my portfolio of {name} </p>
    </>
  );
}

export default App;

