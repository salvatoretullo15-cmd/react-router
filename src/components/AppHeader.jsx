import { NavLink } from "react-router-dom";
import menu from "../data/menu"

export default function AppHeader() {

    return(
        <header>
            <nav>
                {menu.map(item=> <NavLink to={item.path} key={item.id} > {item.text}
                </NavLink>)}
            </nav>
        </header>
    )
}