export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function addToDo(title) {
  return {
    type: ADD_TODO,
    toDoItem: {
      _id: new Date().getTime(),
      title
    }
  };
}

export function deleteToDo(id) {
  return {
    type: DELETE_TODO,
    _id: id
  };
}
