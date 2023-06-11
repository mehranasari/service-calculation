import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ProductItmes = ({ item: { img, text } }) => {
  return (
    <div>
      <h1>{img}</h1>
      <h2>{text}</h2>
    </div>
  )
}

ProductItmes.propTypes = {

}

const mapStateToProp = state => ({

});

export default (ProductItmes);