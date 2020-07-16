import React, { Component } from 'react'

class ReservationForm extends Component {
    constructor(props) {
        super(props)
        this.state={
            nameInput: null,
            dateInput: null,
            timeInput: null,
            numberInput: null,
        }
    }

    changeHandler = (event) => {
        const { name, value } = event.target  
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.state);
        const { createNewReservation } = this.props
        const { nameInput, dateInput, timeInput, numberInput } = this.state
        const newReservation = {
            name: nameInput,
            date: dateInput,
            time: timeInput,
            number: numberInput
        }
        return (
            <section>   
                <input 
                    name='nameInput'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='please enter your name'
                    data-testid = 'name-input'
                >
                </input>
                <input 
                    name='dateInput'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='please enter a date'
                    data-testid = 'date-input'
                >
                </input>
                <input 
                    name='timeInput'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='please enter a time'
                    data-testid = 'time-input'
                >
                </input>
                <input 
                    name='numberInput'  
                    value={ this.state.value } 
                    onChange={ this.changeHandler }
                    type='text' 
                    placeholder='please enter your number'
                    data-testid = 'number-input'
                >
                </input>
                
                <button onClick={(event) => createNewReservation(event, newReservation) }
                >Submit</button>
            </section>
        )
    }
}

export default ReservationForm