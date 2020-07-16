import React from 'react'
import Reservation from '../Reservation/Reservation'

function Reservations(props) {
    const { allReservations } = props;
    const allUserReservations = allReservations.map(reservation => {
    const { id, name, date, time, number } = reservation 
    return <Reservation 
                reservation={ reservation } 
            />  
    })
    return (
        <section style={{
                alignContent: 'space-around',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
                 }}>
           { allUserReservations }
        </section>
    )
}

export default Reservations