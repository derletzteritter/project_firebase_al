import React from 'react'
import styled from 'styled-components';

const FormContainer = styled('div')`
    position: fixed;
    top: 50%;
    background: #45aaf2;
    width: 800px;
    height: 500px;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormScreen = (props) => (
    <FormContainer>
        {props.children}
    </FormContainer>
)