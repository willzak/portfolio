import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import SportsBasketballIcon from '@material-ui/icons/SportsBasketball';

import "../styles/footer.sass";

export default function Ending(props) {

  return (
    <div className="footer">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0077AA" fill-opacity="1" d="M0,96L48,122.7C96,149,192,203,288,224C384,245,480,235,576,213.3C672,192,768,160,864,160C960,160,1056,192,1152,170.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      <div className="footer-info">
        <div className="links-container">
          <a href="https://www.linkedin.com/in/williamzak/"><LinkedInIcon /></a>
          <a href="https://github.com/willzak"><GitHubIcon /></a>
          <a href="https://dribbble.com/willzak"><SportsBasketballIcon /></a>
        </div>
        <p>Created & Designed by Will Zak | © 2020 Will Zak</p>
      </div>  
    </div>
  )
}