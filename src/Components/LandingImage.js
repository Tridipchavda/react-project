
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../background.jpg';

function LandingImage() {
    return (
        <div className="contain">
            <img src={logo} />
            <div className="writeDown">
                <h1>Computer Engineering</h1>
                <p>142,165 Computer Enginners follow this</p>
            </div>
        </div>
    );

}
export default LandingImage;
