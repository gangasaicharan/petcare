import React from 'react'
import AppointmentCard from './AppointmentCard';

function AppointmentColumn({type}) {
    const appointments = [
        { id: 1, doctor: 'Dr. Bobby Sawyer', client: 'Mr. Shashi Singh', pet: 'Cat (Imli)', time: '9:30 - 10:00 AM', image:'download.jpg ' },
        { id: 2, doctor: 'Dr. Kanishk', client: 'Mr. Sahil Singh', pet: 'Dog (Jerry)', time: '9:30 - 10:00 AM' ,image:'download.jpg ' },
        { id: 3, doctor: 'Dr. Rahul Kumar', client: 'Mr. Shashi Singh', pet: 'Cat (Imli)', time: '9:30 - 10:00 AM',image:'download.jpg ' }
      ];
  return (
    
      <div className={`appointments-column ${type}`}>
      <h3>{type === 'today' ? "Today's Appointments" : 'Pending Appointments'}</h3>
      {appointments.map((appt) => (
        <AppointmentCard key={appt.id} appointment={appt} type={type} />
      ))}
    </div>
  )
}


export default AppointmentColumn
