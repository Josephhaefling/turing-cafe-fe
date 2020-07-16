import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import { getReservations } from '../APICalls/APICalls'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      allReservations: null,
    }
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
    const { allReservations } = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
            { allReservations && <Reservations allReservations={ this.state.allReservations } /> }
        </div>
      </div>
    )
  }
}

export default App;
