import logo from '../../img/logo.png'
import {Link} from 'react-router-dom'
import './index.css'

function Header(){
    return(
           <div className='header'>
            <div className="header_logo">
                    <Link to="/"><img src={logo} className="header_logoimg" alt="logo" /></Link>
                    <span className="vazio">
                    </span>
                    <p className="texto-logo">Manaus - AM</p>
            </div>
            
        </div>

        
    );
}

export default Header