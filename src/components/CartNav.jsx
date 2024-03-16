import Card from "./Card"
import CardHeader from "./CardHeader"

const CartNav = () => {

    const dataCards = {
        eachCards: [{
            imgSrc: "../public/ProductImages/bingo.webp",
            pdtName: "Bingo",
            oldPrice: "$8.00",
            price: "$6.00"
        }, 
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/ponds.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/7up.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/7up.jpeg",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
        },
        {
            imgSrc: "../public/ProductImages/milkbikis.webp",
            pdtName: "Milk Bikis",
            oldPrice: "$5.00",
            price: "$4.00"
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
          
        </div>


    )

}

export default CartNav