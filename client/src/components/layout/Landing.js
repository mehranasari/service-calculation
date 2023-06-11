import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Landing.css';
import CalculatorIcon from '../../img/Calculator-icon.png';
import NewReceipt from '../receipt/NewReceipt';
import ListReceipt from '../receipt/ListReceipt';
import { TweenMax, Power3 } from 'gsap';


const Landing = ({ NewReceipt, ListReceipt, isAuthenticated }) => {



  let newReceiptBtn = useRef(null);
  let listReceiptBtn = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      return <Redirect to="/dashboard" />
    }
    TweenMax.to(
      newReceiptBtn,
      1,
      {
        opacity: 1,
        x: 20,
        ease: Power3.easeInOut,
      }
    );

    TweenMax.to(
      listReceiptBtn,
      1,
      {
        opacity: 1,
        x: 20,
        ease: Power3.easeInOut,
        delay: 0.3
      }
    )

  }, []);

  return (
    <Fragment>
      <section className="landing">
        <h2><img src={CalculatorIcon} alt="" />ماشین‌حساب</h2>
        <div className="sub-landing">
          <ul className="receipt-actions">
            <li ref={el => { newReceiptBtn = el }}><Link className={NewReceipt ? 'active' : ''} to="/newReceipt" ><span className={`radio-btn icon-Home ${NewReceipt ? 'active' : ''}`}></span>ایجاد صورتحساب جدید</Link></li>
            <li ref={el => { listReceiptBtn = el }}><Link className={ListReceipt ? 'active' : ''} to="/listReceipt"><span className={`radio-btn icon-Home ${ListReceipt ? 'active' : ''}`}></span>لیست صورتحساب‌ها</Link></li>
          </ul>
        </div>
      </section>
    </Fragment >
  )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
}


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Landing);
