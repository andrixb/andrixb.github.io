import React from 'react';
import { Link } from 'gatsby';
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
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li><a href="/about">About</a></li>
                <li><a href="/contacts">Contacts</a></li>
            </ul>
            { children }
        </MenuComponentStyled>
    );
}
