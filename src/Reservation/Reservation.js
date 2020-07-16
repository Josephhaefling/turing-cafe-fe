import React from 'react'

function Reservation(props) {
    console.log(props);
    const { id, name, date, time, number  } = props.reservation
    return (
        <section>
            <h4>{ name }</h4>
            <p>{ date }</p>
            <p>{ time }</p>
            <p>{ number }</p>
        </section>
    )
}

export default Reservation