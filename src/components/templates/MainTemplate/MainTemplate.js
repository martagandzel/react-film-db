import Footer from "components/sections/Footer/Footer";
import WelcomeMessage from "components/sections/WelcomeMessage/WelcomeMessage";

const MainTemplate = (props) => {
    return (
        <>
            <WelcomeMessage className={props.className} />
            {props.children}
            <Footer />
        </>
    );
}

export default MainTemplate;