


function Contactus({handleValidation,validation,handleEmailInputs,shareEmail}) {
    return (
      <div className="contactuspage">
        <h1>Contact Us</h1>
        <form >
           <input 
             type="text"
             name="name"
             placeholder="Full Name"
             onChange={(e) => {
               handleValidation(e);
               handleEmailInputs(e);
             }}
           />
            <p style={{color:"red",fontWeight:300}}>{validation.validationMessage}</p>
           
           <input type="text"
             placeholder="Phone number"
             name="number"
             onChange={(e) => {
              handleValidation(e);
              handleEmailInputs(e);
            }}
           />
            <p style={{color:"red",fontWeight:300}}>{validation.validationMessage}</p>
           
           <input type="text"
             placeholder="Email"
             name="email"
             onChange={(e) => {
              
              handleEmailInputs(e);
            }}
           />
           <p style={{color:"red",fontWeight:300}}>{validation.validationMessage}</p>
           <input type="text"
             placeholder="Message"
             name="message"
             onChange={(e) => {
              handleValidation(e);
              handleEmailInputs(e);

            }}
           />
            <p style={{color:"red",fontWeight:300}}>{validation.validationMessage}</p>
            <button onSubmit={shareEmail}>SEND NOW</button>
        </form>
       
         
      </div>
    );
  }

  export default Contactus;