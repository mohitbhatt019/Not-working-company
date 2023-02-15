import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  const initData={
    Username:"",
    Password:""
  };

  const[loginForm,setLoginForm]=useState(initData);
  const[loginFormError,setLoginFormError]=useState(initData);

  const navigate=new useNavigate();

  const ChangeHandler=(event)=>{
    setLoginForm({
      ...loginForm,[event.target.name]:event.target.value,
    });
  };
  
  const loginClick=()=>{
    //alert(loginForm.UserName)
    let hasError=false;
    let messages=initData;
    if(loginForm.Username.trim().length==0){
      hasError=true;
      messages={...messages,Username:"UserName Empty!!!"};
    }
    if(loginForm.Password.trim().length==0){
      hasError=true;
      messages={...messages,Password:"Password Empty!!!"};
    }
    if(hasError) setLoginFormError(messages);
    else{
    setLoginFormError(initData);
  
    axios.post("https://localhost:7077/api/Authenticate/Login",loginForm).then((d)=>{

      if(d){
        //** */
        localStorage.setItem("currentUser",d.data.userData)
        alert("user Logged in");
      }else{
        alert("login failed")}
    }).catch((e)=>{
      alert(JSON.stringify(e));
    })
  }
  }

  return (
    <div>

    <div className='row col-lg-6 mx-auto m-2 p-2'>
<div class="card text-center">
  <div class="card-header text-info">Login</div>
  <div class="card-body">
    <div className='form-group row'>
      <label className='col-lg-4' for="txtusername">UserName</label>
      <div className='col-lg-8'>
        <input type="text" onChange={ChangeHandler} id="txtusername" placeholder='Enter Username' className='Form-control' name='Username'/>
        { <p className='text-danger'>{loginFormError.Username}</p> }
      </div>
    </div>
    <div className='form-group row'>
      <label className='col-lg-4' for="txtpassword">Password</label>
      <div className='col-lg-8'>
        <input type="text" onChange={ChangeHandler} id="txtpassword" placeholder='Enter Password' className='Form-control' name='Password'/>
        { <p className='text-danger'>{loginFormError.Password}</p> }

      </div>
    </div>
  </div>
  <div className='card-footer text-muted'>
    <button onClick={loginClick} className='btn btn-info'>Login</button>
  </div>
</div>
    </div> </div> 
     )
}

export default Login