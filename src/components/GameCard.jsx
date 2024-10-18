const GameCard = ({ dateTime, localization }) => {
    return (
      <div className="card mb-3 w-100" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{dateTime}</h5>
          <p className="card-text">{localization}</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-success">Présent</button>
            <button className="btn btn-danger">Absent</button>
            <button className="btn btn-warning">Dispo</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default GameCard;