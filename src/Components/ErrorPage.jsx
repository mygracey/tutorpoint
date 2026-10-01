import {Link} from "react-router-dom";

function ErrorPage(){
    return(
        <section className="errorpage">
            <h2>Ooops! 404 Error. Page Not Found.</h2>
                <Link to="/" className="btn-error">Return Home</Link>
        </section>
    )
}

export default ErrorPage