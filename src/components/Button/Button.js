import './Button.css'
function Button(props) {

    return (
        <button
            className={props.className}
            onClick={props.handleOnClick}
        >
            {props.text}
        </button>
    )
}

export default Button