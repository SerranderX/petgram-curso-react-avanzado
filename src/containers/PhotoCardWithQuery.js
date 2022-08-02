import React from 'react';
import { PhotoCard } from '@components/PhotoCard';
import { getPhoto } from '@querys/getPhoto';
import { useQuery } from "@apollo/client";


export const PhotoCardWithQuery = ({ detailId }) => {

    const { loading, error, data} = useQuery(getPhoto, { variables: { id: detailId } });

    const photo = data?.photo;

    if (error) {
        
        return <h2>Internal Server Error</h2>;
    }
    
    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <PhotoCard {...photo}/>
    );
};