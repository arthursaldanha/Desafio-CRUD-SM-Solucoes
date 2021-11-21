import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container-footer">
         <p>Criado e desenvoldido por <Link to={{pathname: "https://github.com/arthursaldanha"}} target="_blank">
  Arthur Saldanha
</Link>.</p>
      </div>
    </footer>
  );
};

export default Footer;
