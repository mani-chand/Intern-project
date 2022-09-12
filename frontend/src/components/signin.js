const Signin = () => {
    return ( 
        <React.Fragment>
          <div className={Header}>
            <h1>Signin</h1>
          </div>
          <div className="signin-form">
            <div className="signin-user">
                <label className="user-label">MobileNumber</label>
                <input type="text" 
                className="user-input" 
                placeholder="mobilenumber"
                />
            </div>
            <div className="signin-user">
                <label className="user-label">Password</label>
                <input type="password" 
                className="user-input" 
                placeholder="password"
                />
            </div>
          </div>
        </React.Fragment>
     );
}
 
export default Signin;