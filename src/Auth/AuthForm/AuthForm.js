import React from 'react'
import styled from 'styled-components';

import './AuthForm.css'

const FormContainer = styled('div')`
    position: fixed;
    top: 50%;
    background: #45aaf2;
    width: 800px;
    height: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const FormScreen = (props) => (
    <FormContainer>
        <h1 className='auth-title'>{props.title}</h1>
        {props.children}
    </FormContainer>
)