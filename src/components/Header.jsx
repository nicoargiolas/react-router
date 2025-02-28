import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header>
                <h4> Header </h4>
                <div>
                    <NavLink to="/">Homepage</NavLink> <br />
                    <NavLink to="/chisiamo">Chi Siamo</NavLink> <br />
                    <NavLink to="/posts">Lista dei post</NavLink>
                </div>
            </header>
        </>
    )
}