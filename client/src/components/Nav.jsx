import { NavLink } from "react-router-dom"

const Nav = () => {
    

    return (
        <nav>
            <NavLink>
                <button>Library</button>
                </NavLink>
            <NavLink><button>Sign In</button></NavLink>
            <NavLink><button>Sign Up</button></NavLink>
        </nav>
    )
}


export default Nav