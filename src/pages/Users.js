import React, { useContext } from 'react';
import { Context } from '@/Context';
import { SubmitButton } from '@components/SubmitButton'; 
import { Helmet } from 'react-helmet-async';

export const Users = () => {
    const { destroySession } = useContext(Context);

    return (
        <div>
            <Helmet>
                <title>User</title>
                <link rel="canonical" href="https://www.petgram.com/" />
            </Helmet>
            <SubmitButton onClick={() => destroySession()}>Cerrar session</SubmitButton>
        </div>
    );
};