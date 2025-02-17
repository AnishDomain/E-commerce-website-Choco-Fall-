import { useParams,Link } from "react-router-dom";
import slide1 from './chocolate1.png';
import slide2 from './chocolate2.png';
import slide3 from './chocolate3.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";




function Cart({setProduct,product,handleChange,handledelete}) {

   const {id} = useParams();
   const updatedProduct = product.find((pro) => pro.id.toString
    () === id );

    return (
       

        <div className="cart">
          {updatedProduct &&
            <>
             <div className="header">
               <h3>CART</h3>
             </div>
             
             <img src={updatedProduct.image}></img>
            <div className="details">
             <p>{updatedProduct.BRAND}</p>
              <label>QUANTITY:</label>
              <input 
                type='text'
                name="QUANTITY"
                value={updatedProduct.QUANTITY}
                onChange={(e) => handleChange(e, updatedProduct.id,updatedProduct.PRICE)}
              />
              <div className="pricecontainer">
              <label>Price:</label>
              <input
                value={updatedProduct.PRICE}
              />
              </div>
            </div>
            <div className="deleteoption" onClick={()=>handledelete(updatedProduct.id)}>
               <FontAwesomeIcon icon={faTrashCan} />
            </div>
            </>
          }
          {
            !updatedProduct &&
            <>
             
              <p>You Have No items in your cart</p>
             
            </>
          }

                 
       </div>   
        
    );
  }
  
export default Cart;