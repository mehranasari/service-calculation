import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Landing from '../layout/Landing';
import './ListReceipt.scss';

const ListReceipt = props => {
  return (
    <Fragment>
      <Landing ListReceipt={true} />
      List of receipt
    </Fragment>
  )
}

ListReceipt.propTypes = {

}

export default ListReceipt
