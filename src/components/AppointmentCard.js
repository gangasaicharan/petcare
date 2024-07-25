import React from 'react'

const AppointmentCard = ({ appointment, type }) => {
    return (
      <div className="appointment-card">
        <div className="doctor-info">
        <img src={appointment.image} alt={appointment.doctor} className="doctor-image" />
        
        </div>
        <h4>{appointment.doctor}</h4>
        <p>Client: {appointment.client} | Pet: {appointment.pet}</p>
        <p>Time: {appointment.time}</p>
        {type === 'today' ? (<>
          <button className="message-btn">Message</button>
          <button className="cancel-btn">Cancel</button>
          </>
        ) : (
          <>
            <button className="approve-btn">Approve</button>
            <button className="reject-btn">Reject</button>
          </>
        )}
      </div>
    );
  };
  

export default AppointmentCard
