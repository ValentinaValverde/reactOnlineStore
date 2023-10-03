import { Link } from "react-router-dom"

export default function Issue() {

    return(
        <>
        <div className="errorPage">
            <h1> whomp whomp </h1>
            <p>there's been an error</p>
            <Link to="/">go home</Link>
        </div>
        </>
    )
}