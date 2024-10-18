import { FaTshirt } from 'react-icons/fa'; // For the t-shirt icon
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInfo = ({ playerName, playerEmail, teamColor }) => {
    return (
        <div className="user-info p-3" style={{ backgroundColor: '#f0f0f0' }}>
            <div className="d-flex align-items-center">
                <FaTshirt size={24} className={`me-2 ${teamColor}`} />
                <div>
                    <h6 className="mb-0">{playerName}</h6>
                    <small>{playerEmail}</small>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
