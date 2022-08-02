import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { List } from '@components/ListOfPhotoCards/style';
import { useQuery } from "@apollo/client";
import { getPhotos } from '@querys/getPhotos';

export const ListOfPhotoCards = ({categoryId}) => {

    const { loading, error, data: { photos = [] } = {} } = useQuery(getPhotos, { variables: { categoryId } });

    if (error) {
        return <h2>Internal Server Error</h2>;
    }
    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <List>
            {
                photos.map(photoCard => <PhotoCard key={photoCard.id} {...photoCard}/>)
            }
        </List>
    );
};