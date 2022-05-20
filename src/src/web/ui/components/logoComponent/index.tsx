import React from 'react';

import HelloImg from '../../../../../assets/images/hello.svg';
import { LogoContainer } from './styles';

type LogoComponentProps = {
    toggle: boolean;
}

export const LogoComponent = ({ toggle }: LogoComponentProps) => {
    return (
        <LogoContainer toggle={toggle}>
            <HelloImg />
        </LogoContainer>
    );
};
