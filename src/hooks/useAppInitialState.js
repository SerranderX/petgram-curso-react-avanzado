import React from 'react';

export const useAppInitialState = () => {
    var isAuth = window.sessionStorage.getItem('token') !== null ? true : false;

    const createSession = (token) => {
        if(token) {
            window.sessionStorage.setItem('token', JSON.stringify({ token }))
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }

    const destroySession = () => {
        window.sessionStorage.removeItem('token')
        setIsAuth(false)
    }

    const setIsAuth = value => {
        isAuth = value
    }

    return {
        isAuth,
        setIsAuth,
        createSession,
        destroySession
    }
};