import React from 'react'

function Reservation(props) {
    const { id, name, date, time, number  } = props.reservation
    return (
        <section 
            key={ id }
            style={{
                border: '2px solid red',
                height: '40%',
                width: '40%',
                 }}>
            <h4>{ name }</h4>
            <p>{ date }</p>
            <p>{ time }</p>
            <p>{ number }</p>
        </section>
    )
}

export default Reservation