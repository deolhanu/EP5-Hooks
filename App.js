import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
/**
 * Header
 * -logo component
 * home 
 * cart
 * body
 * Search bar
 * restaurant component
 *    - restaurant card
 * footer
 * 
 * 
 */


//will make header
//header will have logo, and iteams





//Res cards



// Body
//body will have search bar and res card
// since res card will be used multiple time , it 
//will get its own component.



const AppLayout = () =>{
return(
  <div clasName ="App">
    <Header/>
    <Body/>
  </div>
)
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);



