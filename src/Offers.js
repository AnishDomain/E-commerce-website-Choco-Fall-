import offerimage from './offer-img.png';


function Footer() {
    return (
      <div className="offers">
        <h1>Offers on chocolates</h1>
        <p>Get 5% Offer</p>
        <p>any Chocolate items</p>
        <button>Buy NOW</button>
        <img  className="offer" src={offerimage}></img>
      </div>
    );
  }
  
  export default Footer;
  
