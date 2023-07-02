import { useDispatch, useSelector } from "react-redux"
import FoodItem from "./FoodItem"
import { clearCart, removeItem } from "../Utils.js/CartSlice"



const Cart = () => {
  // const ordernow=()=>{
  //   return (<h1>Thank you for choosing us </h1>
   
  // )}

  const cartItems=useSelector((Store)=>Store.cart.items)
  const dispatch=useDispatch();
  
  const handleClearCart=()=>{
    dispatch(clearCart());
  };
  const handleRemoveItem=()=>{
    dispatch(removeItem());
  };
  return (
   
    <div className="cartbody">
      <div className="carthead">
      <h1>Happy GOOOOO!!!!!!</h1>
      <h2>Cart Items - <i className="cartdigit">{cartItems.length}</i></h2>
      <button className="clearcart" onClick={()=>handleClearCart()} >
          Clear Cart
      </button>
      <button className="removeItem" onClick={()=>handleRemoveItem()} >
          RemoveItem
      </button>
      <button className="removeItem"  >
          OrderNow
      </button>
      </div>
      
      <div className="cartCard">
        {cartItems.map((item)=>(
             <FoodItem key={item.id} {...item}/>
             
        ))}
       
      </div>
      
    </div>
   
  )
}

export default Cart
