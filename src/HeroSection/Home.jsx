import React from 'react'
import { Link } from 'react-router-dom'
import FeaturedProducts from '../ProductSection/FeaturedProducts'
import ShopCategory from '../CategorySection/ShopCategory'
import NewArrival from '../NewArrivalSection/NewArrival'
import Newsletter from '../NewsletterSection/Newsletter'
import Footer from '../FooterSection/Footer'

export default function Home() {

const features=[
{
emoji:"🎁",
title:"Premium Quality",
desc:"Handpicked with love"
},

{
emoji:"✨",
title:"Unique Designs",
desc:"For every occasion"
},

{
emoji:"💳",
title:"Secure Payment",
desc:"Safe & trusted checkout"
},

{
emoji:"🚚",
title:"Fast Delivery",
desc:"Delivered with care"
}

]

return (

<div>
<section className="moment-section">

<h1 className="moments">
Make Every Moment Special
</h1>


<div className="mainhomecontainer">


{
features.map((item,index)=>(

<div className="moment-item" key={index}>


<div className="emoji">
{item.emoji}
</div>


<div>

<h3>
{item.title}
</h3>


<p>
{item.desc}
</p>


</div>


</div>


))

}


</div>

</section>

<ShopCategory/>
<FeaturedProducts/>
<NewArrival/>
<Newsletter/>
<Footer/>
</div>

)

}