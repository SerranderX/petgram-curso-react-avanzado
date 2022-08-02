import React from 'react';
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import { Button } from '@components/FavButton/styles';
import PropTypes from 'prop-types'

export const FavButton = ({liked, likes, handlerClick}) => {

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={handlerClick}>
            <Icon size="32px" />
            {likes} likes!
        </Button>
    );
};

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    handlerClick: PropTypes.func.isRequired
}