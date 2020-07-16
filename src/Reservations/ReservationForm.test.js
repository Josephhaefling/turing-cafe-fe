import React from 'react';
import ReservationForm from '../ReservationForm/ReservationForm'
import { render, fireEvent } from '@testing-library/react' 
import '@testing-library/jest-dom'
import Reservation from '../Reservation/Reservation';


describe('ReservationForm', () => {
    let reservationFormElement = null
    beforeEach(() => {
        reservationFormElement = <ReservationForm />
    })

    it('should be true',  () => {
        expect(true).toEqual(true)
    })

    it('should have the appropriate form inputs', () => {

        const { getByPlaceholderText } = render(reservationFormElement)
        const name = getByPlaceholderText('please enter your name')
        const time = getByPlaceholderText('please enter a time')
        const date = getByPlaceholderText('please enter a date')
        const number = getByPlaceholderText('please enter your number')
        expect(name).toBeInTheDocument()
        expect(time).toBeInTheDocument()
        expect(date).toBeInTheDocument()
        expect(number).toBeInTheDocument()

    })
})
