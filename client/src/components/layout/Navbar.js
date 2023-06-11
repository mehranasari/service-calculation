import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../action/auth';
import './Navbar.css';
import Logo from '../../img/Logo.svg';
import LanguageFa from '../../img/Language-fa.png';

const Navbar = ({ auth: { isAuthenticated, loading, user }, logout }) => {

  const authLinks = (
    <ul>
      <li><Link to="/dashboard"><i className="fas fa-user"></i>{' '}<span className="hide-sm">{user && user.name}</span></Link></li>
      <li><Link onClick={logout} to="/newReceipt"><i className="fas fa-sign-out-alt"></i>{' '}<span className="hide-sm">Logout</span></Link></li>
    </ul>
  );

  const guestLinks = (
    <ul className="navbar-auth">
      <li><Link to="/login">ورود</Link></li>
      <li className="signup-btn"><Link to="/register">ثبت‌نام</Link></li>
    </ul>
  );

  return (
    <nav className="navbar">
      <h1>
        <Link to="/newReceipt" className="navbar-logo"><img src={Logo} /><h1><span>ابر</span>آروان </h1></Link>
      </h1>
      <ul className="navbar-links">
        <li><Link to="/profiles"><span className="icon-Home"></span>محصولات</Link></li>
        <li><Link to="/register"><span className="icon-Feature"></span>راهکارها</Link></li>
        <li><Link to="/login"><span className="icon-Update"></span>قیمت</Link></li>
      </ul>
      <ul className="navbar-actions">
        <li><span className="icon-Home"></span></li>
        <li><span className="icon-Update"></span></li>
        <li>فا<img src={LanguageFa} className="language-fa" alt="" /></li>
      </ul>
      {!loading && (<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>)}
    </nav>
  )
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
});



export default connect(mapStateToProps, { logout })(Navbar);
