import Body from "./Body";

const RestaurantCards= (props) =>
{
  const {resName} =(props);//retriving valuve from the oject

  const{name,cuisines,costForTwo }= resName.data;

  return(
    <div className="res">
      <img className="res-food-img" src="https://th.bing.com/th/id/OIP.Wp6XgnYRrIXB2P0mSTBhBAHaEo?pid=ImgDet&rs=1"/>
      <h3>{name}</h3>
      <h4> {cuisines.join( " ," )}</h4>
      <h5>{costForTwo} {}</h5>
    </div>
  )
}

export default RestaurantCards;