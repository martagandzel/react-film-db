import './WelcomeMessage.css'
import Nav from "components/sections/Nav/Nav"

function WelcomeMessage(props) {

    return (
        <>
            <header className={props.className}>
                <h1>Welcome to your favourite cinema!</h1>
            </header>
            <Nav />
        </>
    )
}

export default WelcomeMessage