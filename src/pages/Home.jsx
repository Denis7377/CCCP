import React from "react";
import Ads from "../components/Ads/ads";
import {Link} from "react-router-dom";

export default ({data}) => {
    return <>
        <h1 className="title-text">Коротко о главном....</h1>
        <Link className="link" to="/posts">Перейти к постам </Link>
        <Ads/>
    </>
}