import React from "react";
import Card from './Card';
import Sdate from './Card_details';

let a=window.prompt("enter you favroit prime");


const App=()=>{
  
return  (
    <React.Fragment>
    <h1 className="Heading">LIST OF TOP 5 NETFLIX SERIES IN 2020</h1>
    
    {Sdate.map((value)=>{
    
    
    return(<Card
      
      key={value.id}
      imgsrc={value.imgsrc}
      title={value.title}
sname={value.sname}
links={value.links}


/>  );
})}

</React.Fragment>

);
};
export default App;






















// <Card
// imgsrc={Sdate[1].imgsrc}
// title={Sdate[1].title}
// sname={Sdate[1].sname}
// links={Sdate[1].links}

// />
// <Card
// imgsrc={Sdate[2].imgsrc}
// title={Sdate[2].title}
// sname={Sdate[2].sname}
// links={Sdate[2].links}

// />
// <Card
// imgsrc={Sdate[3].imgsrc}
// title={Sdate[3].title}
// sname={Sdate[3].sname}
// links={Sdate[3].links}

// />
// <Card
// imgsrc={Sdate[4].imgsrc}
// title={Sdate[4].title}
// sname={Sdate[4].sname}
// links={Sdate[4].links}

// />