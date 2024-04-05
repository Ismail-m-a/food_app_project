//Importerar social media ikoner från fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faFacebook);
library.add(faInstagram);
library.add(faYoutube);

const Footer = () => {
    return ( 
        <div className="footer">
            <h2><span className="highlight">Global tasty</span><span className="sizer">🍝</span></h2>
            <p>If you have anything on your mind or want to know us more, please contact us on our social media</p>
            <div className="social-links">
                <ul>
                    <li>Instagram <FontAwesomeIcon icon={["brands", "instagram"]} /></li>
                    <li>Facebook <FontAwesomeIcon icon={["brands", "facebook"]} /></li>
                    <li>Youtube <FontAwesomeIcon icon={["brands", "youtube"]} /></li>
                </ul>
            </div>
        </div>
     );
}
 
export default Footer;