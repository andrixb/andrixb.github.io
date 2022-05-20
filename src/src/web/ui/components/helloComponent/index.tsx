import React from 'react';
import { HelloContainer } from './styles';

type HelloComponentProps = {
    toggle: boolean;
};

export const HelloComponent = ({ toggle }: HelloComponentProps) => {
    return (
        <HelloContainer toggle={toggle}>
            <p>
                HE<span>.</span>
            </p>
            <p>LLO</p>
        </HelloContainer>
    );
};
