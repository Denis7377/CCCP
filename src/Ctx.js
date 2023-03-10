import React from "react";

export default React.createContext({
    user: {},
    token: "",
    api: {},
    setUser: () => {},
    setToken: () => {},
    setApi: () => {},
    modalActive: false,
    setModalActive: () => {},
    posts: [],
    favorites: [],
    setPosts: () => {},
    visiblePosts: [],
    setVisiblePosts: () => {},
    favorites: [],
    setFavorites: () => {},
});