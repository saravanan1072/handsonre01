import "./style.css";
import React, { Component } from 'react'

export default class SecondButton extends Component {
  render() {
    return (
      <>
      <div className="second">
      <h1>Tis is created using Class Component</h1>
      <p>This is done using external CSS</p>
      <p style={{color:"blue"}}>This is done using CSS</p>
      </div></>
      
    )
  }
}




