import React from 'react';
import './MainPage.css';
let name="Hriday";
const MainPage = () => {
    return (
        <div>
           <h1 className="title">My Portfolio</h1>
            <p className="description">This is a demo of my portfolio of {name} </p>
       
        </div>
    )
}

export default MainPage;