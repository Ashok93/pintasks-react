import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx';

class TaskApp extends React.Component {

  constructor() {
    super();
    var card_info = [];
    if (typeof(Storage) !== "undefined") {
          // Store
          var card_info = JSON.parse(localStorage.getItem('card_info'));
      }
    this.state = {
      tasks: card_info
    }
  }

  generateId() {
    return Math.floor(Math.random()*90000) + 10000;
  }
  
   addCard(event) {
      let date_time = new Date();
      let task_to_add = this.refs.txt_area.value;
      let task_id = this.generateId();
      let task = {id:task_id, task: task_to_add, dateTime : date_time.toString()};
      let current_state = this.state.tasks;
      current_state.push(task);
      this.setState({
        tasks: current_state
      }, function (){
          this.setLocalStorage(current_state);
      });
    }

    setLocalStorage(current_state) {
         if (typeof(Storage) !== "undefined") {
          // Store
          localStorage.setItem('card_info', JSON.stringify(current_state));
      }
    }

    deleteCard(id) {
      let current_tasks = this.state.tasks;
      current_tasks = current_tasks.filter(function (el) {
      return el.id !== id;
      });

      this.setState({
      tasks: current_tasks
      }, function() {
        this.setLocalStorage(current_tasks)
      });

    }

  render () {
    let HeadingStyle = {
      textAlign: 'center',
      color: 'white'
    };
     let AddCardStyle = {
    width: '200px',
    height: '150px'
    };

    let parent_component = this;

    return(
      <div>
        <h1 style={HeadingStyle} className='typcn typcn-pin' >PIN TASKS</h1>
          <div>
             <div className='card-new'>
              <textArea style={AddCardStyle} ref="txt_area"></textArea>
              <button className='add-card-btn typcn typcn-plus' onClick={this.addCard.bind(this)}></button>
              </div>
            {
              this.state.tasks.map(function(task){
              return <Card key={task.id} task = {task} delete={parent_component.deleteCard.bind(parent_component)}/>
              })
            }
          </div>
      </div>
    );

  }
}
render(<TaskApp/>, document.getElementById('app'));