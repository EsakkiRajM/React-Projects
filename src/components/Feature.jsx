const Feature = (props) => {
    console.log(props.included);
  return (
    <p className="card-text d-flex justify-content-start" style={{ marginLeft: "30px", fontWeight: "bold" }}>
      {/* <span className="">{props.symbol}</span> <span className=""> {props.feature} </span> */}
      <span>{props.symbol}</span> 
            <span className={props.included ? "" : "text-muted"}>{props.feature} </span>
      </p>
  )
}

export default Feature;