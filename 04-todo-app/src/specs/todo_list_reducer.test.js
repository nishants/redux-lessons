import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import todoReducer from './../app/todo_list/todo_list_reducer';

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
        },
          {
            id: 1,
            name: 'Buy Breakfast',
            complete: false
          }],
        expectedState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: true
        },
          {
            id: 1,
            name: 'Buy Breakfast',
            complete: false
          }];

    deepFreeze(initialState);
    deepFreeze(action);
    expect(todoReducer(initialState, action)).toEqual(expectedState);
  });

  it('should mark item as pending', () => {
    const
        action = {
          type: "PENDING_TODO",
          taskID: 0,
          taskName: 'Go to Jogging'
        },
        initialState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: true
        },
          {
            id: 1,
            name: 'Buy Breakfast',
            complete: false
          }],
        expectedState = [{
          id: 0,
          name: 'Go to Jogging',
          complete: false
        },
          {
            id: 1,
            name: 'Buy Breakfast',
            complete: false
          }];

    deepFreeze(initialState);
    deepFreeze(action);
    expect(todoReducer(initialState, action)).toEqual(expectedState);
  });

});

