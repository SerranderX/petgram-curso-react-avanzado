import React from 'react';
import { ContainerSeccion } from '@components/Container/styles';

export const Container = ({children}) => {
    return (
        <ContainerSeccion>
            {children}
        </ContainerSeccion>
    );
};