import React from 'react';
import { Link, Grid, Image } from '@components/ListOfFavs/styles';
import propTypes from 'prop-types';

export const ListOfFavs = ({favs}) => {
    return (
        <Grid>
            {
                favs.map(fav => 
                <Link key={fav.id} to={`/detail/${fav.id}`}>
                    <Image key={fav.id} {...fav}/>
                </Link>)
            }
        </Grid>
    );
};

ListOfFavs.propTypes = {
    favs: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string.isRequired,
        src: propTypes.string.isRequired,
    })).isRequired
}