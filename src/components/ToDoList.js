import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ToDo from './ToDo';

const ToDoList = ({ toDoList }) => (
  <Jumbotron>
    <ListGroup>
      {toDoList.map(
        (toDo, index) => (
          console.log(toDo),
          (<ToDo key={index} title={toDo.title} id={toDo._id} />)
        )
      )}
    </ListGroup>
  </Jumbotron>
);

ToDoList.propTypes = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default ToDoList;
