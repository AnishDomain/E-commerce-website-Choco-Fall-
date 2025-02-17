import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import slide1 from './chocolate1.png';
import slide2 from './chocolate2.png';
import slide3 from './chocolate3.png';
import { Link } from 'react-router-dom';






function Productspage({ toggleBar, isOpen, filteredProducts, setFilteredProducts, product,isCollapsed }) {
  const handleFilter = (type) => {
    if (type === "All") {
      setFilteredProducts(product);
    } else {
      const filtered = product.filter((product) => product.TYPE === type);
      setFilteredProducts(filtered);
    }
  };

  const handlePrice = (price) => {
    const filtered = product.filter((product) => product.PRICE === price);
    setFilteredProducts(filtered);
  };

  const handleBrand = (brand) => {
    const filtered = product.filter((product) => product.BRAND === brand);
    setFilteredProducts(filtered);
  };

  return (
    <>    
      <div className="productspage">
        <h1>Our Chocolate Products</h1>
        <p>
          Many desktop publishing packages and web page editors now use Lorem
          Ipsum as their dummy text.
        </p>
      </div>

      <div className="filtercontainer">
        <div className="filtericon" onClick={toggleBar}>
          <FontAwesomeIcon
            icon={faSliders}
            onClick={toggleBar}
            style={{
              height: "35px",
              width: "35px",
              position: "relative",
              left: "4%",
              cursor: "pointer",
            }}
          />
        </div>

        <div className={`filterpage ${isOpen ? "open" : ""}`}>
          <h2>FILTER</h2>

          {/* TYPE Filter */}
          <div className="type">
            <label style={{ fontSize: "18px", fontWeight: "500", color: "#46200b" }}>
              TYPE
            </label>
            <div>
              <input type="radio" name="type" id="all" onClick={() => handleFilter("All")} />
              <label htmlFor="all">All</label>
            </div>
            {product.map((product) => (
              <div key={product.id}>
                <input
                  type="radio"
                  name="type"
                  id={product.TYPE}
                  onClick={() => handleFilter(product.TYPE)}
                />
                <label htmlFor={product.TYPE}>{product.TYPE}</label>
              </div>
            ))}
          </div>

          {/* BRAND Filter */}
          <div style={{ marginTop: "20px", marginBottom: "20px" }}>
            <label style={{ fontSize: "18px", fontWeight: "500", color: "#46200b" }}>
              BRAND
            </label>
            {product.map((product) => (
              <div key={product.id}>
                <input
                  type="radio"
                  name="brand"
                  id={product.BRAND}
                  onClick={() => handleBrand(product.BRAND)}
                />
                <label htmlFor={product.BRAND}>{product.BRAND}</label>
              </div>
            ))}
          </div>

          {/* PRICE Filter */}
          <div>
            <label style={{ fontSize: "18px", fontWeight: "500", color: "#46200b" }}>
              PRICE
            </label>
            {product.map((product) => (
              <div key={product.id}>
                <input
                  type="radio"
                  name="price"
                  id={product.PRICE}
                  onClick={() => handlePrice(product.PRICE)}
                />
                <label htmlFor={product.PRICE}>{product.PRICE}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Products Section */}
        <div className="productcontainer">
          {filteredProducts.map((product) => (
            <div key={product.id} className={`product${product.id}`}>
              <img src={product.image} alt={product.TYPE} />
              <Link to={`/Cartpage/${product.id}`}>
                <div className="productdetails">
                  <h4>
                    {product.BRAND.split(" ")[0]} <span>{product.BRAND.split(" ")[1]}</span>
                  </h4>
                  <h5>{product.PRICE}</h5>
                  <p>BUY NOW</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Productspage;
