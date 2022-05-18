import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { List } from '@components/ListOfPhotoCards/style';
import data from '../../../api/db.json'

export const ListOfPhotoCards = () => {
    return (
        <List>
            {
                data.photos.map(photoCard => <PhotoCard key={photoCard.id} {...photoCard}/>)
            }
        </List>
    );
};