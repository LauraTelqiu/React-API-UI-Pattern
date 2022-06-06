import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        
        <div>
          <h1>Check out these five fun cat facts</h1>
        </div>
          

        <img
          alt="catpic"
          src={
            "https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          }
        />
      
       
        
          
      </div>
     
    );
  }
}
