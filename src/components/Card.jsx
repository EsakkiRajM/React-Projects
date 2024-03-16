
const Card = (props) => {
    
    return (    
                
                <div className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card m-4" style={{ width: "15rem" }}>
                    {/* <img src="./src/assets/ProductImages/bingo.webp" className="card-img-top img-fluid mt-2" alt="..." /> */}
                    <div>
                        <img src={props.pdtList.imgSrc} className="card-img-top img mt-2" alt="Product images" />
                        <hr className="w-100"/>
                        
                    </div>
                    <div className="card-body p-1">
                    <h3 className="text-center"> <strong> {props.pdtList.pdtName} </strong></h3>
                        <p className="mx-3">
                            <span className="d-block text-danger"> <del> { props.pdtList.oldPrice } </del></span>
                                <strong className="text-success"> {props.pdtList.price} </strong>
                        </p>
                        <button className="btn btn-outline-dark">Add to cart</button>
                    </div>
                </div>
                </div>
    )
}

export default Card