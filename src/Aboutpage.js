import image3 from './about-img.png';
import {Link} from 'react-router-dom';

function Aboutpage() {
    return (
      <main>
         <div className="aboutpage">
           <h1>About Our Company</h1>
           <p>Choco Fall is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web pagend web page editors now use Lorem Ipsum as their default model text, </p>
           <img src={image3}></img>
        </div>
      </main>
     
    
    );
  }

  export default Aboutpage;
  