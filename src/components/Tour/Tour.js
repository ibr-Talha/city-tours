import React, { Component } from 'react'
import "./Tour.scss";

export default class Tour extends Component {
  render() {
    return (
      <article className='tour'>
        <div className='img-container'>
            <img width="200" src = "https://images.pexels.com/photos/4344759/pexels-photo-4344759.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt = "" />
            <span className='close-btn'>
                <i className='fas fa-window-close'  />
            </span>
        </div>
        <div className='tour-info'>
            <h3>City</h3>
            <h4>Name</h4>
            <h5>İnfo {" "} 
                <span>
                 <i className='fas fa-caret-square-down'></i></span> 
            </h5>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, Harum, debitis.
            </p>
        </div>
      </article>
    )
  }
}
