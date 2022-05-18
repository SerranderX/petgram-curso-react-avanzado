import React, {Fragment} from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from '@styles/GlobalStyles';
import { ListOfPhotoCards } from '@components/ListOfPhotoCards';
import PetgramLogo from '@assets/Logo';

export const App = () => (
    <Fragment>
        <GlobalStyles/>
        <PetgramLogo/>
        <ListOfCategories />
        <ListOfPhotoCards/>
    </Fragment>
    )
