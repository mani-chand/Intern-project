import React from 'react'
const Signup = () => {
    return ( 
        <React.Fragment>
        <div className="Header">
          <h1>Signup</h1>
        </div>
        <div className="signup-form">
          <div className="form-user">
              <label className="user-label">Name</label>
              <input type="text" 
              className="user-input" 
              placeholder="Name"/>
          </div>
          <div className="form-user">
              <label className="user-label">MobileNumber</label>
              <input type="text" 
              className="user-input" 
              placeholder="MobileNumber"/>
          </div>
          <div className="form-user">
              <label className="user-label">Password</label>
              <input type="password" 
              className="user-input" 
              placeholder="Password"/>
          </div>
          <div className="form-user">
              <label className="user-label">email</label>
              <input type="text"
               className="user-input" 
               placeholder="email"/>
          </div>
          <div className="form-user">
              <label className="user-label">address</label>
              <input type="text"
               className="user-input" 
               placeholder="address"/>
          </div>
        </div>
      </React.Fragment>
     );
}
 
export default Signup;