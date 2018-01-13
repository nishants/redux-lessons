import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import todoReducer from './../app/todo_reducer';

describe("TODO Reducer", ()=>{
  it('should initialize state', () => {
    expect(todoReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });
  it('should add item', () => {
    const
        addItemAction = {
          type: "ADD_TODO",
          taskID: 0,
          taskName: 'Go to Jogging'
        },
        expectedState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: false
        }];

    expect(todoReducer(undefined, addItemAction)).toEqual(expectedState);
  });
  it('should mark item finished', () => {
    const
        action = {
          type: "FINISHED_TODO",
          taskID: 0,
          taskName: 'Go to Jogging'
        },
        initialState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: false
        }],
        expectedState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: true
        }];

    deepFreeze(initialState);
    deepFreeze(action);
    expect(todoReducer(initialState, action)).toEqual(expectedState);
  });

});

