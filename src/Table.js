import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Row from './Row';
import { ItemTypes } from './Constants';


const tableTarget = {
  drop(props) {
    console.log('drop');
  },
  hover(props, monitor, component) {
    const clientOffset = monitor.getClientOffset();
    console.log(document.elementFromPoint(clientOffset.x, clientOffset.y));
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

@DropTarget(ItemTypes.ROW, tableTarget, collect)
export default class Table extends Component {
  static propTypes = {
    items: PropTypes.array
  };

  _createRows() {
    const rows = [];
    this.props.items.forEach((item) => {
      rows.push(<Row key={ item.id } item={ item }/>);
    });

    return rows;
  };

  render() {
    const { connectDropTarget } = this.props;
    const style = {
      width: 100,
      minWidth: 100
    }

    const rowStyle = {
      borderColor: 'black',
      border: 'solid 1px'
    }
    return connectDropTarget(
      <table>
        <colgroup>
          <col style={ style }></col>
          <col style={ style }></col>
          <col style={ style }></col>
          <col style={ style }></col>
        </colgroup>
        <thead>
          <tr>
            <th>
              <div>
                <span>ID</span>
              </div>
            </th>
            <th role="button" aria-label="sort">
              <div >
                <span>Name</span>
                <div role="column-sizer" aria-label="column resizer" aria-hidden="true"></div>
              </div>
            </th>
            <th >
              <div >
                <a href="http://rallydev.com">State</a>
              </div>
            </th>
            <th>
              <div>
                <span>Estimate</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          { this._createRows() }
        </tbody>
      </table>
    );
  }
}
