
import React from "react";
import Images from "./Images";
import Header from "./Header";



function Card(props){
return (
<React.Fragment>
<div className="cards">
<div className="card">
<Images imgsrc={props.imgsrc}/>
<div className="card_info">
<span className="card_category">{props.title} </span>
<Header sname={props.sname}/>
<a href={props.links} target="_blank" className="card_links">
<button>Watch Now</button>
</a>
</div>
</div>
</div>

</React.Fragment>
);

}
export default Card;