import React from 'react';

import VetCard from './VetCard';

function VetColumn() {
    const vets = [
        { id: 1, name: 'Dr. Juhi', status: 'Online', specialization: 'Veterinary orthopaedic', details: 'Specialist in musculoskeletal injuries and diseases for Dogs', image:'doctor.jpg' },
        { id: 2, name: 'Dr. Kanishk', status: 'On Break', specialization: 'Veterinary orthopaedic', details: 'Specialist in musculoskeletal injuries and diseases for Dogs',image:'doctor1.jpg' }
      ];
    
      return (
        <div className="vets-column">
          <h3>All Vets</h3>
          {vets.map((vet) => (
            <VetCard key={vet.id} vet={vet} />
          ))}
          <button className="add-vet-btn">Add more vets</button>
        </div>
  )
}

export default VetColumn
