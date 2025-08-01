import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MyLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
    if (email === 'vivek@gmail.com' && password ===  '1234') {
      navigate('/dashboard');
    } else {
      alert('Invalid Login')
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-2"></div>
        <div className="col-lg-6 col-md-8 login-box">
          <div className="col-lg-12 login-key">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
          <div className="col-lg-12 login-title">
            ADMIN PANEL
          </div>

          <div className="col-lg-12 login-form">
            <div className="col-lg-12 login-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-control-label">USERNAME</label>
                  <input type="text" className="form-control" onInput={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-control-label">PASSWORD</label>
                  <input type="password" className="form-control" onInput={(e) => setPassword(e.target.value)} i />
                </div>

                <div className="col-lg-12 loginbttm">
                  <div className="col-lg-6 login-btm login-text">

                  </div>
                  <div className="col-lg-12 login-btm login-button">
                    <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-3 col-md-2"></div>
        </div>
      </div>
    </div>
  )
}

export default MyLogin