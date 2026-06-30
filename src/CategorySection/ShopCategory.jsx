import React from "react";
import "./ShopCategory.css";
import gift from "../assets/Images/gifts.png"
import accessories from "../assets/Images/accessories.png"
import stationery from "../assets/Images/stationery.png"
import personalized from "../assets/Images/personalized.png"


const categories = [

{
title:"GIFTS",
desc:"Explore Now →",
image:gift
},

{
title:"ACCESSORIES",
desc:"Explore Now →",
image:accessories
},

{
title:"STATIONERY",
desc:"Explore Now →",
image:stationery
},

{
title:"PERSONALIZED",
desc:"Explore Now →",
image:personalized
}

]


function ShopCategory(){

return(

<section className="shop-category">


<div className="category-title">

<h2>SHOP BY CATEGORY</h2>

<div className="line"></div>

</div>



<div className="category-container">


{
categories.map((item,index)=>(


<div className="category-card" key={index}>


<div className="category-img">

<img 
src={item.image}
alt={item.title}
/>

</div>


<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>


</div>


))
}


</div>


</section>


)

}


export default ShopCategory;