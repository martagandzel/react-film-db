
function Button(props) {

    return (
        <button
            className={props.className}
            onClick={props.function}
        >
            {props.text}
        </button>
    )
}

export default Button