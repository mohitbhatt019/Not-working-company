import React from 'react'
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';

function Header() {
  return (
    <div><nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Contact</a>
        </li>
        
        <li class="nav-item">
        <Link to="login" class="nav-link btn btn-outline-success my-2 my-sm-0 m-2" href="#">Login</Link>
        </li>
        
        <li class="nav-item">
        <Link to="register" class="nav-link btn btn-outline-success my-2 my-sm-0 m-2" href="#">Register</Link>
        </li>
      </ul>
      
    </div>
  </nav>
  </div>
  )
}

export default Header


