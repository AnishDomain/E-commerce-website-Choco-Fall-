
import './App.css';
import Home from './Home.js';
import Contactus from './Contactus';
import { Routes, Route } from 'react-router-dom';
import Aboutpage from './Aboutpage.js';
import Productspage from './Productspage.js';
import slide1 from './chocolate1.png';
import slide2 from './chocolate2.png';
import slide3 from './chocolate3.png';
import { useState,useEffect } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Cartpage from "./Cartpage.js";
import emailjs from "@emailjs/browser";
import api from "./products.js";


function App() {


  
  const[product,setProduct] = useState([]);
  const slides = [slide1, slide2, slide3]; 
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState(product);
  

  
  const [isCollapsed, setIsCollapsed] = useState(false);
  const[sendEmail,setSendEmail] = useState(
    {
      name:'',
      number:'',
      email:'',
      message:'',
    }
  )

  useEffect(() => {
    const fetchPosts = async () => {
      try{
       const response = await api.get('/product');
       setProduct(response.data);
      }
     catch(err) {
       if(err.response) {
         console.log(err.response.data);
         console.log(err.response.status);
         console.log(err.response.headers);
       } else {
         console.log(`Error: ${err.message}`);
       }
     }
    }
   fetchPosts();
 }, [])

  const shareEmail = (e) =>{
       e.preventDefault();
       emailjs.send('service_6fnrq6p', 'template_uespifc', sendEmail, '_57Gdr1-82hCBuGCT')
       .then((response) => {
         console.log('SUCCESS!', response.status, response.text);
       })
       .catch((err) => {
         console.log('FAILED...', err);
       });
 
       setSendEmail({
         name:'',
         number:'',
         email:'',
         message:''
       });
  }


 

const handleEmailInputs = (e) => {
         setSendEmail({...sendEmail,[e.target.name]:e.target.value})
}



  const[validation,setValidation] = useState({validationMessage: '' });


 const handleValidation = (e) => {
        const specialChars = /[!@#$%&()<?{}|<>]/g;
        const message = specialChars.test(e.target.value) ? 'SPECIAL CHARACTERS ARE NOT ALLOWED' : ''; 
        setValidation({validationMessage:message})
 }
    
 
 
  

  const nextSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousSlide = () => {
    setCurrentSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = async (e, id) => {
    
    const updatedProducts = product.map((p) =>
      p.id === id ? { ...p, PRICE:e.target.value*85, QUANTITY: Number(e.target.value) } : p
    );
    
      setProduct(updatedProducts);
    
  };

  const handledelete = async(id) => {
    try{
       await api.delete(`product/${id}`)
       const newList = product.filter((pro) => pro.id !== id );
       setProduct(newList);
    }
    catch(err) {
      console.log(`Error: ${err.message}`);
    
  }
  } 

  
  return (
    <>
    <div className="App">
      <Header isOpen={isOpen} toggleBar={toggleBar} isCollapsed={isCollapsed}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              slides={slides}
              currentSlideIndex={currentSlideIndex}
              previousSlide={previousSlide}
              nextSlide={nextSlide}
              
            />
          }
        />
        <Route path="/Aboutpage" element={<Aboutpage />} />
        <Route path="Contactus" element={<Contactus
          handleValidation={handleValidation}
          validation={validation}
          handleEmailInputs={handleEmailInputs}
          shareEmail = {shareEmail}
        />} />
        <Route path="/Cartpage/:id"  element ={<Cartpage
            
            product={product}
            handledelete={handledelete}
            setProduct = {setProduct}
            handleChange = {handleChange}
        />} />
        <Route path="Cartpage"  element ={<Cartpage 
          product={product}
          handledelete={handledelete}
          setProduct = {setProduct}
          handleChange = {handleChange}
        />} />
        <Route
          path="Productspage"
          element={
            <Productspage
            
              product ={product}
              filteredProducts={filteredProducts}
              setFilteredProducts ={setFilteredProducts}
              isOpen = {isOpen}
              toggleBar ={toggleBar}
              slides={slides}
              setCurrentSlideIndex={setCurrentSlideIndex}
              currentSlideIndex={currentSlideIndex}
              nextSlide={nextSlide}
              previousSlide={previousSlide}
            />
          }
          
        />
      </Routes>
      <Footer/>
    </div>
    
    
 </>
    
  );
}

export default App;

