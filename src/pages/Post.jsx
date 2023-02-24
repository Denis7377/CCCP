import React, { useState, useEffect, useContext } from "react";
import {useParams, Link, useNavigate, Navigate} from "react-router-dom";
import {Trash3} from "react-bootstrap-icons";
import Reviews from "../components/Reviews/Reviews";
import Ctx from "../Ctx";
import "./Post.css";

export default function Post ({}) {
    const {id} = useParams();
    const [message, setMessage] = useState({});
    const {api, PATH, user, setPosts} = useContext(Ctx);
    const navigate = useNavigate();
    useEffect(() => {
        api.getPost(id)
            .then(res => res.json())
            .then(data => {
                setMessage(data);
            })
    }, []);
    const btnSt = {
        position: "absolute",
        right: "400px",
        top: "120px",
        cursor: "pointer",
        height: "auto"
    }
    const remove = () => {
        api.deletePost(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setPosts(prev => prev.filter(g => g._id !== data._id))
                    navigate(`${PATH}posts`);
                }
            })
    }
    return <>
        <Link className="text_post" to={PATH + "posts"}><b>Назад</b></Link>
        {message && message.author && message.author._id === user._id && <button 
            onClick={remove} 
            className="btn" 
            style={btnSt}
        >
            <Trash3/>
        </button>}
        <h1 className="title_post">{message.title || "Страница товара"}</h1>
        {/* <p>Автор: {message.author.name}</p> */}
        <img className="img_post"
            src={message.image}
            alt="message"
        />
        <p className="text_post">{message.text}</p>
        <h2 className="text_post" >Комментарии</h2>
        <div className="text_post , reviews">
            {message.comments && message.comments.length > 0 && message.comments.map((el, i) => <Reviews  {...el} key={i}/>)}
        </div>
    </>
}