import React from 'react';
import Reservations from '../Reservations/Reservations'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getReservations } from '../APICalls/APICalls'

jest.mock('../APICalls/APICalls')
import Reservation from '../Reservation/Reservation';

describe('ReservationForm', () => {
    let reservationsElement = null
    let allReservations = null
    beforeEach(() => {
        allReservations = [{
        id: 18907224,
        name: 'Leta',
        date: '8/8',
        time: '7:00',
        number: 3
        }, {
        id: 18907225,
        name: 'Khalid',
        date: '8/9',
        time: '7:00',
        number: 5
        }]

        reservationsElement = < Reservations allReservations={ allReservations } / >
    })

    it('should be true', () => {
        expect(true).toEqual(true)
    })

    it('should have the appropriate form inputs', () => {

        const { getByText } = render(reservationsElement)
        const name1 = getByText('Leta')
        const name2 = getByText('Khalid')
        expect(name1).toBeInTheDocument()
        expect(name2).toBeInTheDocument()

    })
})
