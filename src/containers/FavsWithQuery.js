import React, {Fragment} from "react";
import { useQuery } from "@apollo/client";
import { getFavs } from '@querys/getFavs';
import { ListOfFavs } from "@components/ListOfFavs";
import { handlerSessionError } from '@utils/handlerSession';

export const FavsWithQuery = () => {
    const { loading, error, data } = useQuery(getFavs, {fetchPolicy: "cache-and-network"});

    if(error) { 
        handlerSessionError(error);
        return <h2>Internal Server Error</h2> 
    }
    if(loading) { return <h2>Loading...</h2> }
    const {favs} = data

    return (
        <Fragment>
            <h1>Favoritos</h1>
            <ListOfFavs favs={favs} />
        </Fragment>
    );
}
