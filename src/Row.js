import React, { Component, PropTypes } from 'react';
import { DragSource } from 'react-dnd';

import { ItemTypes } from './Constants';


const rowSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

@DragSource(ItemTypes.ROW, rowSource, collect)
export default class Row extends Component {
  static propTypes = {
    item: PropTypes.object,
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired
  };

  render() {
    const { connectDragSource, item } = this.props;

    const tdStyle = {
        borderRight: '1px solid #fff',
        borderLeft: '1px solid #e8e8e8',
        borderTop: '1px solid #fff',
        borderBottom: '1px solid #e8e8e8',
        padding: '10px 15px',
        position: 'relative',
        transition: 'all 300ms'
    }

    const style = {
      width: 100,
      minWidth: 100
    }

    const rowStyle = {
      borderColor: 'black',
      border: 'solid 1px'
    }
    return connectDragSource(
      <tr style={ rowStyle } role="row">
        <td style={ tdStyle }>{item.id }</td>
        <td style={ tdStyle }>{ item.name }</td>
        <td style={ tdStyle }>{ item.state }</td>
        <td style={ tdStyle }>{ item.estimate }</td>
      </tr>
    )
  }
}
