import './Input.css'

function Input(props) {

    return (
        <label htmlFor={props.id}>
            <span>{props.placeholder}</span>
            <input
                className={props.className}
                type={props.type ? props.type : "text"}
                placeholder={props.placeholder}
                id={props.id}
                value={props.value}
                onChange={props.HandleChange}
                required
            />
        </label>
    )
}

export default Input