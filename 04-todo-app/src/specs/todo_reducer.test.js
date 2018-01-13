import React from 'react';
import ReactDOM from 'react-dom';
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
          name: 'Go to Jogging'
        }];

    expect(todoReducer(undefined, addItemAction)).toEqual(expectedState);
  });

})

