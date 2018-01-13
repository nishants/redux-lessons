import React from 'react';
import ReactDOM from 'react-dom';
import todoReducer from './../app/todo_reducer';

describe("TODO Reducer", ()=>{
  it('should initialize state', () => {
    expect(todoReducer(undefined, {type: "UNKNOWN"})).toEqual([]);
  });
})

