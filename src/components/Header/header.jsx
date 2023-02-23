import React, {useContext} from "react";
import {Link} from "react-router-dom";
import Search from "../Search/search";
import "./header.css";
import Ctx from "../../Ctx";
import {PlusCircle, HeartFill} from "react-bootstrap-icons";
import {Badge} from "react-bootstrap";
import logo from "./img/header-logo.png"
import UserL from "./img/lenin.png"

function Header ()  {
    const {user,  setModalActive, PATH, favorites} = useContext(Ctx);

    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }
  
    return <header>
        <Link className="logo" to={PATH}> <img src={logo} alt="" /></Link>
        <Search/>
        <nav className="menu">
            {user && <Link to={PATH + "add"}><PlusCircle style={{fontSize: "20px"}}/></Link>}
            {user && <Link to={PATH + "favorites"} className="badge-link">
                <HeartFill style={{fontSize: "20px"}}/>
                {/* <Badge bg="danger" text="light">{favorites.length}</Badge> */}
                <Badge bg="light" text="dark">{favorites.length}</Badge>
            </Link>}
            {user && user.name && <Link to={PATH + "profile"}><img className="UserL" src={UserL}/>{user.name}</Link>}
            { !user && <a href="" onClick={logIn} className="logo">Войти</a>}
        </nav>
    </header>
}
export default Header;