import React from 'react';
import { HeroComponentStyled } from './style';

type HeroComponentProps = {
    copylines?: string[];
};


export default function HeroComponent({ copylines = []}: HeroComponentProps) {
    return (
        <HeroComponentStyled>
            <footer> <small>&copy; Copyright 2022, Andrea Baldo</small> </footer> 
        </HeroComponentStyled>
    );
};
