import React from 'react'
import './SideBar.css';

export default function login() {

  return (
    <div>
      <div class="login-div">
      <div class="logo"></div>
      <div class="title">Login</div>
        <div class="fields">
          <div class="username">
             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <input type="username" class="user-input" placeholder="Username" /> 
             </div>
             <div class="password">
               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
               </svg>
               <input type="password" class="pass-input" placeholder="Password" />
            </div>
         </div>
         <button class="signin-button">Login</button>
        <div class="link">
          <a href="#">Forgot password?</a>
    </div>
    </div>

    </div>
  )
}
