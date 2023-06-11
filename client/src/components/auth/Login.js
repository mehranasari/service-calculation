import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login } from '../../action/auth';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { html } from '../html.js';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

// import { Container, Button, Alert } from 'react-bootstrap';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';

import './Login.css';

const Login = ({ login, isAuthenticated }) => {

  console.log(html);

  useEffect(() => {
    document.getElementById("test").innerHTML = html;
  }, []);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    login(email, password);

    //Example of request with axios in react without Redux
    // const newUser = {
    //   email,
    //   password
    // }
    // try {
    //   const config = {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'x-auth-token': ''
    //     }
    //   };
    //   const body = JSON.stringify(newUser);
    //   const res = await axios.post('/api/users/login', body, config);
    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err.response.data);
    // }
  };

  //Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  function demoUsingTTFFont() {

    const doc = new jspdf({ filters: ["ASCIIHexEncode"] });


    doc.addFileToVFS("../../fonts/Amiri-Regular.ttf");
    doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");

    doc.setFont("Amiri"); // set font
    doc.text('یبسنابسینبا', 15, 15);
    doc.fromHTML(html, 15, 15, {
      'width': 170,
      // 'elementHandlers': specialElementHandlers
    })

    doc.save('sampleDoc.pdf');

    // html2canvas(html, {
    //   onrendered: function (canvas) {
    //     var doc = new jspdf();
    //     doc.save('test.pdf')
    //   }
    // })

  }



  return (
    <Fragment>
      <h1 className="large text-primary">Sign In</h1>
      <p className="lead"><i className="fas fa-user"></i> Sign into Your Account</p>
      <form className="form" onSubmit={e => onSubmit(e)}>
        <div className="form-group">
          <input type="email" placeholder="Email Address" name="email" value={email} onChange={e => onChange(e)} />
          <small className="form-text"
          >This site uses Gravatar so if you want a profile image, use a
            Gravatar email</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minlength="6"
            value={password}
            onChange={e => onChange(e)}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>

      <button onClick={e => demoUsingTTFFont(e)}>click me</button>
      <div id="test"></div>

    </Fragment>
  )
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);