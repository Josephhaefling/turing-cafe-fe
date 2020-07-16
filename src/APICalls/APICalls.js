export const getReservations = async () => {
    const allReservations = await fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    return allReservations
}