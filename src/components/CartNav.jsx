import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Card from "./Card"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import CartValue from "./CartValue"
import { useState } from "react"
import "./Card.css"

import { bingo } from "../ProductImages/bingo.webp"
import { milkbikis } from "../ProductImages/milkbikis.webp"
import { ponds } from "../ProductImages/ponds.webp"
import { sevenup } from "../ProductImages/7up.webp"
import { dairymilk } from "../ProductImages/dairymilk.webp"
import { dove } from "../ProductImages/dove.webp"
import { fogg } from "../ProductImages/fogg.webp"
import { goodday } from "../ProductImages/goodday.webp"
import { kitkat } from "../ProductImages/kitkat.webp"
import { rin } from "../ProductImages/rin.webp"
import { tiger } from "../ProductImages/tiger.webp"
import { gillette } from "../ProductImages/gillette.webp"


const CartNav = () => {

    const [cartValue, setCartValue] = useState(0);

    const dataCards = {
        eachCards: [{
            imgSrc: bingo ,
            pdtName: "Bingo",
            oldPrice: "₹40.00",
            price: "₹35.00 only"
        },
        {
            imgSrc: milkbikis,
            pdtName: "Milk Bikis",
            oldPrice: "₹20.00",
            price: "₹18.00 only"
        },
        {
            imgSrc: ponds,
            pdtName: "Ponds Powder",
            oldPrice: "₹25.00",
            price: "₹19.00 only"
        },
        {
            imgSrc: sevenup,
            pdtName: "7UP",
            oldPrice: "₹33.00",
            price: "₹29.00 only"
        },
        {
            imgSrc: dairymilk,
            pdtName: "Dairy Milk",
            oldPrice: "₹85.00",
            price: "₹70.00 only"
        },
        {
            imgSrc: dove,
            pdtName: "Dove Shampoo",
            oldPrice: "₹78.00",
            price: "₹69.00 only"
        },
        {
            imgSrc: fogg,
            pdtName: "FOGG Perfume",
            oldPrice: "₹247.00",
            price: "₹199.00 only"
        },
        {
            imgSrc: goodday,
            pdtName: "Good Day",
            oldPrice: "₹25.00",
            price: "₹19.00 only"
        },
        {
            imgSrc: kitkat,
            pdtName: "Kit Kat",
            oldPrice: "₹60.00",
            price: "₹49.00 only"
        },
        {
            imgSrc: rin,
            pdtName: "Rin Powder",
            oldPrice: "₹149.00",
            price: "₹129.00 only"
        },
        {
            imgSrc: tiger,
            pdtName: "Tiger",
            oldPrice: "₹20.00",
            price: "₹19.00 only"
        },
        {
            imgSrc: gillette,
            pdtName: "Gillette",
            oldPrice: "₹65.00",
            price: "₹49.00 only"
        }
        ]
    }
    return (
        <div><nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">ES Hyper Market</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <div className="btn btn-outline-dark">
                            <FontAwesomeIcon icon={faCartShopping} /> &nbsp;
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                <CartValue cartValue={ cartValue } />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
            <CardHeader />
            <div className='container-fluid'>
                <div className='row d-flex justify-content-center text-center'>
                    {
                        dataCards.eachCards.map((pdtList, index) => {
                            return <Card pdtList={pdtList} 
                            key={index} 
                            cartValue={cartValue}
                            setCartValue={setCartValue}/>
                        })
                    }

                </div>
            </div>
            <CardFooter />

        </div>


    )

}

export default CartNav