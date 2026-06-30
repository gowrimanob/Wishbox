import React from "react";
import "./Newsletter.css";

import img1 from "../assets/Images/product4.png";
import img2 from "../assets/Images/product1.png";
import img3 from "../assets/Images/product2.png";


function Newsletter(){

return(

<section className="newsletter-section">


<div className="newsletter-container">


<div className="newsletter-content">


<div className="mail-icon">
✉
</div>


<h2>
STAY IN THE LOOP
</h2>


<p>
Join our community and get exclusive offers
<br/>
and new arrivals updates!
</p>



<div className="subscribe-box">

<input 
type="email"
placeholder="Enter your email"
/>


<button>
SUBSCRIBE
</button>


</div>


</div>





<div className="newsletter-images">


<img src={img1} alt="gift"/>

<img src={img2} alt="product"/>

<img src={img3} alt="collection"/>


</div>



</div>


</section>


)

}


export default Newsletter;