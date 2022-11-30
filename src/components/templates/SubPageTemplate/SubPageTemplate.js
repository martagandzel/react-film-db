import Nav from "components/sections/Nav/Nav";

const SubPageTemplate = (props) => {
    return (
        <>
            <Nav />
            {props.children}
        </>
    );
}

export default SubPageTemplate;