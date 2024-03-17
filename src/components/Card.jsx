
import { useState } from "react";
import Button from "./Button"
import "./Card.css"

const Card = (props) => {

    //console.log(props);

    const [isAddedToCart, setIsAddedToCart] = useState(false);

    const handleAddToCart = () => {
        setIsAddedToCart(true);
        props.setCartValue(props.cartValue+1);
    };

    const handleRemoveFromCart = () => {
        setIsAddedToCart(false);
        props.setCartValue(props.cartValue-1);
    };


    return (

        <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card m-4 border-dark" style={{ width: "15rem" }}>
                <div>
                    <img src={props.pdtList.imgSrc} className="card-img-top img mt-2" alt="Product images" />
                    <hr className="w-100" />

                </div>
                <div className="card-body p-1">
                    <h3 className="text-center"> <strong> {props.pdtList.pdtName} </strong></h3>
                    <p className="mx-3">
                        <span className="d-block text-danger"> <del> {props.pdtList.oldPrice} </del></span>
                        <strong className="text-success"> {props.pdtList.price} </strong>
                    </p>

                    {isAddedToCart ? (
                        <Button
                            text="Remove from cart"
                            onClick={handleRemoveFromCart}
                        />
                    ) : (
                        <Button
                            text="Add to cart"
                            onClick={handleAddToCart}
                        />
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card