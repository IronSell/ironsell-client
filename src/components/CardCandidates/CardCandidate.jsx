import * as PATHS from '../../utils/paths';
import { Link } from 'react-router-dom';
import './CardCandidate.css'


function CardCandidate(props) {
    const { name, lastName, province, profession, profilePicture, _id } = props.getCandidates;
    return (
      <div className='cardCandidate'>
        {/* <Link to={PATHS.CANDIDATESPAGE + '?id=' + _id}> */}
        <div className="card-container">
        <img className="round" src={profilePicture} alt="user" />
        <h3>{name} {lastName}</h3>
        <h6>{province}</h6>
        <p>{profession}</p>
        <div className="buttons">
            <button className="primary">
                About
            </button>
        </div>
        <div className="skills">
            <h6>Skills</h6>
            <ul>
                <li>UI / UX</li>
                <li>Front End Development</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node</li>
		    </ul>
	    </div>
    </div>
        {/* </Link> */}
      </div>
    );
  }
  
  export default CardCandidate;