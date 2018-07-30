/* global expect, it, describe, jest */
import React from 'react';
import { shallow, mount } from 'enzyme';
import AddTodo from './index';


describe('Add to do component Test', () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} />);
  });

  it('Should render successfully.', () => {
    expect(component.exists()).toEqual(true);
  });

  it('Should have one input', () => {
    expect(component.find('.todo-input').length).toEqual(1);
  });

  // Test cases for buttons
  describe('Add to do Button', () => {
    it('Should exists', () => {
      expect(component.find('.todo-submit').length).toEqual(1);
    });

    it('Should call submit to do function when clicked', () => {
      component = mount(<AddTodo submitTodo={submitMock} />);
      component.find('form').simulate('submit');
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});

