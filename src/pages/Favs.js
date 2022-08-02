import React, { Fragment } from 'react';
import { FavsWithQuery } from '@containers/FavsWithQuery';
import { Helmet } from 'react-helmet-async';

export default () => {
    return (
        <Fragment>
            <Helmet>
                <title>Favoritos</title>
                <link rel="canonical" href="https://www.petgram.com/" />
            </Helmet>
            <FavsWithQuery />
        </Fragment>
    );
};