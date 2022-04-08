import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import { catPics } from "./catPics.js"
import Navbar from "./Components/Navbar.jsx";
import Cat from "./Components/Cat.jsx";
import "./App.css";

function App() {

  const [cats, setCats] = useState([])

  let getCats = async () => {
    let data = await axios("https://cat-fact.herokuapp.com/facts")
    localStorage.setItem('cats', JSON.stringify(data.data))
    setCats(data.data)
  }

  useEffect(() => {
    getCats()
  }, [])
  

  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<h2>Cat Facts!</h2>} /> */}
        <Route path="/cat-fact-1" element={<Cat index={0} cats={cats} catPic={catPics[0]} num={1}/>} />
        <Route path="/cat-fact-2" element={<Cat index={1} cats={cats} catPic={catPics[1]} num={2}/>} />
        <Route path="/cat-fact-3" element={<Cat index={2} cats={cats} catPic={catPics[2]} num={3}/>} />
        <Route path="/cat-fact-4" element={<Cat index={3} cats={cats} catPic={catPics[3]} num={4}/>} />
        <Route path="/cat-fact-5" element={<Cat index={4} cats={cats} catPic={catPics[4]} num={5}/>} />
      </Routes>
    </div>
  );
  }
  

export default App;

