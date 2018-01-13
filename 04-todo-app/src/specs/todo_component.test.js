import React from 'react';
import ReactDOM from 'react-dom';
import TODO from './../app/todo_component.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TODO tasks={[]}/>, div);
});
