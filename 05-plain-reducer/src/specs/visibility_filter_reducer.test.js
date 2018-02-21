import React from 'react';
import ReactDOM from 'react-dom';
import deepFreeze from 'deep-freeze';
import visibilityFilterReducer from './../app/visiblity_filer_reducer';

describe("TODO Reducer", ()=>{
  it('should not show completed tasks by default', () => {
    expect(visibilityFilterReducer(undefined, {type: "UNKNOWN"})).toEqual({showCompleted: false});
  });
  it('should show completed tasks by action', () => {
    const
        action = {
          type: "SET_VISIBILITY_FILTER",
          showCompleted: true
        },
        initialState = {
          showCompleted: false
        },
        expectedState = {
          showCompleted: true
        };
    expect(visibilityFilterReducer(initialState, action)).toEqual(expectedState);
  });

});

