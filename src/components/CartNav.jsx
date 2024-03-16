import Card from "./Card"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

const CartNav = () => {

    const dataCards = {
        eachCards: [{
            imgSrc: "../public/ProductImages/bingo.webp",
            pdtName: "Bingo",
            oldPrice: "₹40.00",
            price: "₹35.00 only"
        }, 
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "₹20.00",
            price: "₹18.00 only"
        },
        {
            imgSrc: "../public/ProductImages/ponds.webp",
            pdtName: "Ponds Powder",
            oldPrice: "₹25.00",
            price: "₹23.00 only"
        },
        {
            imgSrc: "../public/ProductImages/7up.webp",
            pdtName: "7UP",
            oldPrice: "₹33.00",
            price: "₹30.00 only"
        },
        {
            imgSrc: "../public/ProductImages/dairymilk.webp",
            pdtName: "Dairy Milk",
            oldPrice: "₹85.00",
            price: "₹70.00 only"
        },
        {
            imgSrc: "../public/ProductImages/dove.webp",
            pdtName: "Dove Shampoo",
            oldPrice: "₹78.00",
            price: "₹69.00 only"
        },
        {
            imgSrc: "../public/ProductImages/fogg.webp",
            pdtName: "FOGG Perfume",
            oldPrice: "₹247.00",
            price: "₹199.00 only"
        },
        {
            imgSrc: "../public/ProductImages/goodday.webp",
            pdtName: "Good Day",
            oldPrice: "₹25.00",
            price: "₹19.00 only"
        },
        {
            imgSrc: "../public/ProductImages/kitkat.webp",
            pdtName: "Kit Kat",
            oldPrice: "₹60.00",
            price: "₹49.00 only"
        },
        {
            imgSrc: "../public/ProductImages/rin.webp",
            pdtName: "Rin Powder",
            oldPrice: "₹149.00",
            price: "₹129.00 only"
        },
        {
            imgSrc: "../public/ProductImages/tiger.webp",
            pdtName: "Tiger",
            oldPrice: "₹20.00",
            price: "₹19.00 only"
        },
        {
            imgSrc: "../public/ProductImages/gillette.webp",
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
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
            <CardHeader />
            <div className='container-fluid'>
            <div className='row d-flex justify-content-center text-center'>
            {
                dataCards.eachCards.map((pdtList, index) => {
                    return   <Card pdtList = { pdtList } key={ index } />
                })
            }
            </div>
            </div>
            <CardFooter />
          
        </div>


    )

}

export default CartNav