import { ADD_TODO } from '../actions';
import { DELETE_TODO } from '../actions';

const initialState = {
  toDoList: []
};

export default function toDoApp(state = initialState, action) {
  let newToDoList = [
    ...state.toDoList,
    {
      ...action.toDoItem
    }
  ];
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: newToDoList
      };

    case DELETE_TODO:
      let toDoList = state.toDoList;
      let id = action.id;
      console.log('Action', action, toDoList);
      //this.state.toDoList.remove(todo => todo._id === id);
      //console.log('Action After', action, toDoList);
      //this.setState({ tasks: this.state.toDoList });
      return {
        //state,
        toDoList: newToDoList
      };

    default:
      return state;
  }
}
