import "./CartItem.scss";
import { useContext } from "react";
import {MdClose} from "react-icons/md";
import { Context } from "../../../utils/context";



const CartItem = () => {
    
    const {CartItems , handleRemoveFromCart, handleCartProductQuantity} = useContext(Context);
    return( 
    <div className="cart-products">
        {CartItems?.map((item) => (
                <div key={item.id} className="cart-product" onClick={()=>{}}>
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data[0].attributes.url} alt="" />
                </div>
                <div className="prod-detail">
                    <span className="name">{item.attributes.title}</span>
                    <MdClose className="close-btn" onClick={()=> handleRemoveFromCart(item)}/>
                    <div className="quantity-buttons">
                                <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                                <span>{item.attributes.quantity}</span>
                                <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>x</span>
                        <span className="highlight">&#8377;{item.attributes.price * item.attributes.quantity}</span>
    
    
    
                    </div>
                </div>
            </div>
        ))}
        
    </div>
    );
};

export default CartItem;
