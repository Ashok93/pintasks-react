import React from 'react';
import {render} from 'react-dom';

class Card extends React.Component {
  
  //receiving props. No State Component. Uses the props.
  constructor(props) {
    super(props);
  }

  deleteClicked(e) {
    this.props.delete(this.props.task.id);
  }

  render(){

    let AddCardStyle = {
    width: '200px',
    height: '150px'
    }

    return(
            <div className='card'>
            <div className='typcn typcn-trash delete' onClick={this.deleteClicked.bind(this)}></div>
            <div>{this.props.task.task}</div>
            <span className='date-time'>{this.props.task.dateTime}</span>
            </div>
        );
  }
}

export default Card;