import React from 'react';
import { Nav, LinkButton } from '@components/Navbar/style';
import { MdHome, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md'

const SIZE = "28px";

export const Navbar = () => {
    return (
        <Nav>
            <LinkButton to="/"><MdHome size={SIZE}/></LinkButton>
            <LinkButton to="/favs"><MdFavoriteBorder size={SIZE}/></LinkButton>
            <LinkButton to="/user"><MdPersonOutline size={SIZE}/></LinkButton>
        </Nav>
    );
};