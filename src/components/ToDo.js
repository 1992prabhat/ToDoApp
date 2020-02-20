import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';

import { deleteToDo } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    deleteToDo: id => dispatch(deleteToDo(id))
  };
}

class ToDo extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //     title: ""
    // };
  }

  render() {
    return <ListGroup.Item>{this.props.title}</ListGroup.Item>;
  }
}

export default ToDo;
