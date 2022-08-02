import React, { Fragment, useContext } from 'react';
import { UserForm } from '@components/UserForm';
import { Context } from '@/Context';
import { RegisterMutation } from '@containers/RegisterMutation';
import { LoginMutation } from '@containers/LoginMutation';
import { Helmet } from 'react-helmet-async';

export const NotRegistredUser = () => {
    const { createSession } = useContext(Context);
    const { mutationReg, mutationRegLoading, mutationRegError } = RegisterMutation();
    const { mutationLog, mutationLogLoading, mutationLogError } = LoginMutation();

    const onSubmitReg = ({email, password}) => {
        const input = { email, password }
        const variable = { input }
        mutationReg({variables: variable})
        .then(({data}) => {
            createSession(data.signup)
        })
        .catch((err) => {
            console.error(err)
        });
    }

    const onSubmitLog = ({email, password}) => {
        const input = { email, password }
        const variable = { input }
        mutationLog({variables: variable})
        .then(({data}) => {
            createSession(data.login)
        })
        .catch((err) => {
            console.log(err)
        });
    }

    return (
        <Fragment>
            <Helmet>
                <title>Login</title>
                <link rel="canonical" href="https://www.petgram.com/" />
            </Helmet>
            <UserForm onSubmit={onSubmitLog} title={"Iniciar sesion"} loading={mutationLogLoading} error={mutationLogError?.message} />
            <UserForm onSubmit={onSubmitReg} title={"Registrate"} loading={mutationRegLoading} error={mutationRegError?.message} />
        </Fragment>
    );
};