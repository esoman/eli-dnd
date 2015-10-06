import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd/modules/backends/HTML5';

import Table from './Table';

@DragDropContext(HTML5Backend)
export default class App extends Component {
  render() {
    const items = [
      {
        id: '1',
        name: 'test',
        state: 'done',
        estimate: 'L'
      },
      {
        id: '2',
        name: 'test2',
        state: 'in progress',
        estimate: 'L'
      },
      {
        id: '3',
        name: 'test3',
        state: 'in progress',
        estimate: 'L'
      }
    ];

    const style = {
      width: 100,
      minWidth: 100
    }

    const rowStyle = {
      borderColor: 'black',
      border: 'solid 1px'
    }

    return (
      <div>
        <h1>Hello, world.</h1>
        <Table items={ items }/>
      </div>
    );
  }
}
