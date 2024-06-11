import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Status() {
  const [selectedStats, setSelectedStats] = useState(null);

  const colorMapping = {
    Success: '#28a745',
    Pending: '#ffc107',
    Shiping: '#007bff'
  };

  const handleSelect = (eventKey) => {
    setSelectedStats(eventKey);
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle
          style={{ backgroundColor: selectedStats ? colorMapping[selectedStats] : '#5a6e4f', width: '200px' }}
          variant="success"
          id="dropdown-status"
        >
          {selectedStats ? selectedStats : 'Status'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item style={{ backgroundColor: '#28a745' }} eventKey="Success">Success</Dropdown.Item>
          <Dropdown.Item style={{ backgroundColor: '#ffc107' }} eventKey="Pending">Pending</Dropdown.Item>
          <Dropdown.Item style={{ backgroundColor: '#007bff' }} eventKey="Shiping">Shiping</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Status;
