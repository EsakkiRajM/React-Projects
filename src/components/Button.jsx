

const Button = (props) => {

  //console.log(props.btnCount);

  return (
    <div>
      <button
        className="btn btn-outline-dark mb-3"
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  )
}

export default Button