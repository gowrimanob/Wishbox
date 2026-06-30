import React from "react";
import "./NewArrival.css";


const occasions = [

{
icon:"🎂",
title:"Birthday",
desc:"Gifts"
},

{
icon:"♡",
title:"Anniversary",
desc:"Surprises"
},

{
icon:"💼",
title:"Corporate",
desc:"Gifting"
},

{
icon:"🎁",
title:"Custom",
desc:"Creations"
}

]


function NewArrival(){

return(

<section className="arrival-section">


<div className="arrival-content">


<div className="arrival-text">

<span>
NEW ARRIVALS
</span>


<h2>
For Every Moment,<br/>
A Perfect Gift
</h2>


<button>
SHOP NOW
</button>


</div>




<div className="occasion-container">


{
occasions.map((item,index)=>(


<div className="occasion-item" key={index}>


<div className="occasion-icon">
{item.icon}
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


</div>


</section>


)

}


export default NewArrival;