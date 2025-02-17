import image1 from './slider-bg1.png';
import image2 from './slider-img.png';


function Banner() {
    return (
    <main>
      <div className="bannercontent">
        <img  src = {image1}></img>
          <h1 className="header1"> Chocolates</h1>
          <h2 className="header2">Yummy</h2>
          <img className="chocolatebowl" src = {image2}></img>
      </div>
    </main>
      
    
    );
  }

  export default Banner;