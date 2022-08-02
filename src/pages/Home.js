import React, { Fragment } from 'react';
import { ListOfCategories } from '@components/ListOfCategories';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards';
import { Layout } from '@components/Layout';

export const Home = ({id}) => {
    return (
        <Fragment>
            <Layout title="Petgram - Home" description="Petgram es una aplicacion para encontrar fotos de mascotas">
                <ListOfCategories />
                <ListOfPhotoCards categoryId={id} />
            </Layout>
        </Fragment>
    );
};