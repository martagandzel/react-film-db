import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = (props) => {

    return (
        <ul className={props.className ? props.className : "mainNav"}>
            <li>
                <Link to='/'>
                    Home
                </Link>

            </li>
            <li>
                <Link to='/addnewfilm'>
                    Add new film
                </Link>

            </li>
            <li>
                <Link to='/register'>
                    Register
                </Link>

            </li>
            <li>
                <Link to='/login'>
                    Log in
                </Link>

            </li>
        </ul>
    );
}

export default Nav;