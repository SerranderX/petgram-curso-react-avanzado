import React, { useState, Fragment } from 'react';
import {Title, Form, Input, Container} from '@components/UserForm/styles';
import {SubmitButton} from '@components/SubmitButton';

export const UserForm = ({ onSubmit, title, loading, error }) => {
    const [form, setForm] = useState({email: '',password: ''});

    const handleForm = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: form.email, password: form.password });
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Title>{title}</Title>
                {error && <h4 style={{color: 'red'}}>{error}</h4>}
                {loading && <h4 style={{color: 'blue'}}>Loading...</h4>}
                {!loading && 
                    <Fragment>
                        <Input placeholder='Email' name="email" value={form.email} onChange={handleForm}/>
                        <Input placeholder='Password' type="password" name="password" value={form.password} onChange={handleForm}/>  
                        <SubmitButton type="submit">{title}</SubmitButton>
                    </Fragment>
                }
            </Form>
        </Container>
    );
};