import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { UserForm, RoomFeed, StudentForm, StudentFeed } from './components'
import * as roomsActions from './ducks/Rooms'
import * as studentsActions from './ducks/Students'

const styles = {
  container: {
    backgroundColor: '#efefef',
    display: 'flex',
    flexFlow: 'column wrap',
    height: '100vh',
  },
  row: {
    display: 'flex',
    flexFlow: 'row wrap',
  },
  column: width => ({
    display: 'flex',
    flexFlow: 'column wrap',
    flex: width,
  }),
}

class App extends Component {
  state = {
    formVisible: false
  }
  handleClick = e => {
      const {formVisible} = this.state
      this.setState({formVisible: !formVisible})
      console.log('The link was clicked.', this.state.formVisible); 
      
      e.preventDefault();       
  }
  render() {
    const { addRooms, rooms, addStudents, students, selectedRoom } = this.props
    const { formVisible } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div style={styles.container}>
        {!formVisible && 
          <div>
            <h1>Ingrese salas</h1>
            <UserForm initialValues={{ name: '' }} onSubmit={addRooms} />
            <div>
                <RoomFeed rooms={rooms} handleClick={this.handleClick}/>            
            </div>
          </div>
        }
        {formVisible && 
          <div>
            <h1>Ingrese estudiante</h1>
            <StudentForm onSubmit={addStudents} roomId={selectedRoom.id} />
            <StudentFeed students={students} />
            <input type='button' value='volver' onClick={this.handleClick}/>
          </div>}          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { Rooms : { data: rooms }} = state;
  const { Students : { data: students }} = state;

  const selectedRoom = rooms.find(x=>x.selected)
  
  return { 
    rooms, 
    students, 
    selectedRoom,
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  ...roomsActions,
  ...studentsActions,
},dispatch,)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
