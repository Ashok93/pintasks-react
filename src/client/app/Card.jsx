import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      task: this.props.task
    }
  }

    deleteClicked(e) {
      this.props.delete(this.props.task.id);
    }

  render (){

    let AddCardStyle = {
    width: '200px',
    height: '150px'
    }

    return(
            <div className='card'>
            <div className='typcn typcn-trash delete' onClick={this.deleteClicked.bind(this)}></div>
            <div>{this.state.task.task}</div>
            <span className='date-time'>{this.state.task.dateTime}</span>
            </div>
        );
  }
}

export default Card;