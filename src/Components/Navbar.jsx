import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

      <nav className='nav'>
        <Link className="link" to="/">Home</Link>
        <Link className='link' to="/cat-fact-1">Cat Fact 1</Link>
        <Link className='link' to="/cat-fact-2">Cat Fact 2</Link>
        <Link className='link' to="/cat-fact-3">Cat Fact 3</Link>
        <Link className='link' to="/cat-fact-4">Cat Fact 4</Link>
        <Link className='link' to="/cat-fact-5">Cat Fact 5</Link>
      </nav>
    </header>
  )
}

export default Navbar;