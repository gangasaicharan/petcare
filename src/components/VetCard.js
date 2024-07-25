import React from 'react'

function VetCard({vet}) {
  return (
    <div className="vet-card">
      <h4>{vet.name}</h4>
      <p>{vet.specialization}</p>
      <p>{vet.details}</p>
      <div className={`status ${vet.status.toLowerCase()}`}>{vet.status}</div>
      <button className="slots-btn">3 Slot Available</button>
      <button className="message-btn">Message</button>
    </div>
  )
}

export default VetCard
