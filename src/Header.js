import {Link} from 'react-router-dom';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function Header({toggleBar,isOpen}) {
    return (
      <>
      
      
         <header className="Headernav">
       <nav>
          <Link to ='/' style={{textDecoration:"none"}}><p>Choco Fall</p></Link>
          <div className="container" onClick={toggleBar} >
            <div className="dash1"></div>
            <div className="dash2"></div>
            <div className="dash3"></div>
          </div> 
         <div className={`navbarcollapse ${isOpen ?"open": ""}`}>
           <ul>
                <li><Link to='/' style={{textDecoration:"none", color:"#000000",fontWeight:450  }}>HOME</Link></li>
                <li><Link to='/Aboutpage' style={{textDecoration:"none", color:"#000000",fontWeight:450}}>ABOUT</Link></li>
                <li><Link to='Productspage' style={{textDecoration:"none", color:"#000000",fontWeight:450}}>CHOCOLATES</Link></li>
                <li><Link to='Contactus' style={{textDecoration:"none", color:"#000000",fontWeight:450}}>CONTACT US</Link></li>
                <li><Link to='Cartpage'><FontAwesomeIcon  icon={faCartShopping}/></Link></li>
            </ul>
         </div>
        </nav>
      </header>
      </> 
     
    
    );
  }

  export default Header;
  