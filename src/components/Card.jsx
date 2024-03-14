import Feature from "./Feature";
import "./Card.css"

const Card = (props) => {

    //console.log(props.card.features);
      return (
      <>
        <div className="col-lg-4 col-md-6 col-12">
          <div className='card m-5 border border-dark'>
            <div className='card-header'>
              <span className="text-muted">{props.card.type}</span>
              <h2 className="mt-2"> {props.card.cost} </h2>
            </div>
            <div className='card-body cardBackground'>
              <p className="card-text d-flex justify-content-start" style={{ marginLeft: "30px", fontWeight: "bold" }}>
              <i class="fa-solid fa-check mx-2 mt-1 text-success"></i> {props.card.user} </p>
              {
  
                props.features.map((feature, index) => {
                  const included = props.card.features.includes(feature);
                  console.log(included);
                  const symbol = included ? <i class="fa-solid fa-check mx-2 text-success"></i> 
                  : <i class="fa-solid fa-xmark mx-2 text-danger"></i>;
                  return <Feature className="d-flex justify-content-start align-items-start
                         mx-2" feature={feature} key={index} symbol={symbol} included={included} />
                })
              }
                    <button className="btn btn-outline-info btn-lg text-black">Subscribe</button>
            </div>
          </div>
        </div>
      </>
    )
  }
  
export default Card;  