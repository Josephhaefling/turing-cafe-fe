import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import ReservationForm from '../ReservationForm/ReservationForm'
import { getReservations } from '../APICalls/APICalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: null,
      newReservations: null
    }
  }

  createNewReservation = (event, newReservation) => {
    event.preventDefault()
    this.setState({
      newReservations: [newReservation]
      })
  }

  componentDidMount = async () => {
      try { 
          const allReservations = await getReservations()
          this.setState({ allReservations: allReservations })
      } catch (error) {
          this.setState({
            error: error
          });
        }
  }

  render() {
    console.log(this.state);
    console.log(this.state);
    const { allReservations, newReservations } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
            <ReservationForm 
              createNewReservation={ this.createNewReservation } 
            />
        </div>
        <div className='resy-container'>
            { allReservations && <Reservations 
                allReservations={ this.state.allReservations }
            /> }
            { newReservations && <Reservations 
                allReservations={ this.state.newReservations }
            /> }
        </div>
      </div>
    )
  }
}

export default App;
