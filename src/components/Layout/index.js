import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';

export const Layout = ({children, title, description}) => {
    return (
        <Fragment>
            <Helmet>
                <title>{title}</title>
                <link rel="canonical" href="https://www.petgram.com/" />
                <meta name="description" content={description}/>
            </Helmet>
            {children}
        </Fragment>
    );
};