import React from 'react';
import { Button } from '@components/SubmitButton/styles';
import propTypes from 'prop-types';

export const SubmitButton = ({ children, onClick }) => {
    return (
        <Button type="submit" onClick={onClick}>
            {children}
        </Button>
    );
};

SubmitButton.prototype = {
    onClick: propTypes.func,
    children: propTypes.node.isRequired,
}