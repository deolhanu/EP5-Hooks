import RestaurantCards from "./RestraurantCard";
import resList from "../utils/utils/mockData";
import { useState } from "react";


const Body = ()=>
{

  const [List, setList] =useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=> 
          {const filterList = List.filter((res) => res.data.costForTwo > 40000);
            setList(filterList);
          }} >
           Top rated Res</button>

           
      </div>
      <div className ="res-con">
      {List.map((restaurant)=> (<RestaurantCards  resName={restaurant}/>))}
       </div>
     
    </div>
  )
}

export default Body;