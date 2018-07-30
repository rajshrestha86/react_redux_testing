/* global expect, it,describe */
import types from '../constants';
import { reducer, initialState } from '.';

describe('reducer tests', () => {
  const todoText = 'A todo';

  it('Should render the initial state when no action passed', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });


  describe('Submt todo', () => {
    it('Should return the correct state', () => {
      const action = {
        type: types.SUBMIT_TODO,
        id: 1,
        text: todoText,
      };

      const expectedState = {
        todos: [
          {
            id: 1,
            text: todoText,
          },
        ],
      };

      expect(reducer(undefined, action)).toEqual(expectedState);
    });
  });

  describe('Delete todo',()=>{
    it('Should return the correct state after deletion', ()=>{
      const startingState={
        todos:[
          {
          id: 1,
          text: todoText,
          }
        ]
      };

      const action={
        type: types.DELETE_TODO,
        id:1
      };

      const expectedState={
        todos:[]
      };

      expect(reducer(startingState, action)).toEqual(expectedState);

    });
  });

});
