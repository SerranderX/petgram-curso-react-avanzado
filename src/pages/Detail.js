import React from 'react';
import { PhotoCardWithQuery } from '@containers/PhotoCardWithQuery';
import { Layout } from '@components/Layout';

export const Detail = ({detailId}) => {
    return (
        <Layout title={`Detail - Fotografia ${detailId}`} description={`Detalles de la fotogracia ${detailId}`}>
            <PhotoCardWithQuery detailId={detailId}/>
        </Layout>
    );
};