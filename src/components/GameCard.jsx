import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const GameCard = ({ dateTime, localization }) => {
  const [selectedButton, setSelectedButton] = useState('present');

  // Function to handle button selection
  const handleButtonClick = (buttonType) => {
    setSelectedButton(buttonType);
  };

  return (
    <div className="card mb-3 w-100">
      <div className="card-body">
        <h5 className="card-title">{dateTime}</h5>
        <p className="card-text">{localization}</p>
        <div className="d-flex justify-content-between">
          <button
            className={`btn ${selectedButton === 'present' ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => handleButtonClick('present')}
          >
            Présent
          </button>
          <button
            className={`btn ${selectedButton === 'absent' ? 'btn-danger' : 'btn-outline-danger'}`}
            onClick={() => handleButtonClick('absent')}
          >
            Absent
          </button>
          <button
            className={`btn ${selectedButton === 'dispo' ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => handleButtonClick('dispo')}
          >
            Dispo
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
