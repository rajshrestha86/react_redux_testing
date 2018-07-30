import actions from '.';
import types from '../constants';

describe('Actions', () => {
  const todoText = 'A todo';
  it('Should create a action to add a todo', () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
    };

    expect(actions.submitTodo(todoText)).toEqual(expectedAction);
  });

  it('Should delete action a TODO Item', ()=>{
    const expectedAction={
      type: types.DELETE_TODO,
      id: 1
    };

    expect(actions.deleteTodo(1)).toEqual(expectedAction);
  });
});
