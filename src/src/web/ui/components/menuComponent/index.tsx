import React from 'react';
import { MenuComponentStyled } from './styles';

export type MenuComponentProps = {
    children?: JSX.Element;
    setInteracted: any;
};

export default function MenuComponent({ setInteracted, children }: MenuComponentProps) {
    const handleOnMouseEnter = (event: any) =>  setInteracted(true);
    const handleOnMouseLeave = (event: any) =>  setInteracted(false);
    return (
        <MenuComponentStyled>
            <ul onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                <li>Portfolio</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
            { children }
        </MenuComponentStyled>
    );
}
