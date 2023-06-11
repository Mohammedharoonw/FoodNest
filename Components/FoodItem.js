import { IMG_CDN_URL } from "../constants";

const FoodItem = ({
  cloudinaryImageId,
  name,
  description,
  cuisines,
 price,
}) => {
  
  return (
    <div className="card">
     
      {/* <img src={IMG_CDN_URL+cloudinaryImageId}  alt="logo is not available" /> */}
      <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDBjOGE1ODkyMjE3N2NjY2UzMzBkM2UzMmY1NTZhZDQ5N2M5M2FmYyZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/YKl75I0XWF1lk4kITm/giphy.gif"  alt="logo is not available" />
      <h2>{name}</h2>
      <h6>{cuisines}</h6>
      <h4>Rupees{price/100}</h4>
      </div>
   
  );
};

export default FoodItem;
