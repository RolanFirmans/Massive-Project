import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BankList() {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleSelect = (eventKey) => {
    setSelectedBank(eventKey);
  };

  return (
    <div>
      <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle style={{backgroundColor: '#5a6e4f'}} variant="success" id="dropdown-basic">
          {selectedBank ? selectedBank : 'Bank List'}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey="BCA 321294566567 (Putra Ari Sandi)">BCA </Dropdown.Item>
          <Dropdown.Item eventKey="Mandiri 311122233347 (Putra Ari Sandi)">Mandiri</Dropdown.Item>
          <Dropdown.Item eventKey="OVO 085925570403 (Putra Ari Sandi)">OVO</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {selectedBank && (
        <div>
          <p>Bank Information: <br />{selectedBank}</p>
          {/* Menampilkan informasi tambahan terkait bank yang dipilih di sini */}
        </div>
      )}
    </div>
  );
}

export default BankList;