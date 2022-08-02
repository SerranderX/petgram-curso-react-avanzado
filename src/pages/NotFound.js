import React from 'react';
import { Container } from '@components/Container';
import { Helmet } from 'react-helmet-async';

export const NotFound = () => {
    return (
        <Container>
            <Helmet>
                <title>NotFound</title>
                <link rel="canonical" href="https://www.petgram.com/" />
            </Helmet>
            <h1>Recurso requerido no existe</h1>
        </Container>
    );
};