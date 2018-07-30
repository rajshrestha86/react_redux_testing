import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {shallow } from 'enzyme';
import {initialState} from './reducers/';


it('renders without crashing', () => {

  const mockFunction=jest.fn();

  const component=shallow(
    <App 
      state={initialState}
      submitTodo={mockFunction} 
      todos={[]}
      deleteTodo={mockFunction}/>
  );

  expect(component.exists()).toEqual(true);

});
